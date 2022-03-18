import fastapi as _fastapi
import fastapi.security as _security
import jwt as _jwt
import datetime as _dt
import sqlalchemy.orm as _orm
import passlib.hash as _hash

import database as _database
import models as _models
from models import Scraper
import schemas as _schemas

oauth2schema = _security.OAuth2PasswordBearer(tokenUrl="/api/token")

JWT_SECRET = "myjwtsecret"
scrape = Scraper()


def create_database():
    return _database.Base.metadata.create_all(bind=_database.engine)


def get_db():
    db = _database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


async def get_user_by_email(email: str, db: _orm.Session):
    return db.query(_models.User).filter(_models.User.email == email).first()


async def create_user(user: _schemas.UserCreate, db: _orm.Session):
    # create object -> add -> show_user_obj
    user_obj = _models.User(
        email=user.email,
        hashed_password=_hash.bcrypt.hash(user.hashed_password),
        first_name=user.first_name,
        last_name=user.last_name,
        birth_date=user.birth_date,
        weight=user.weight,
        height=user.height,
        sick=user.sick

    )
    db.add(user_obj)
    db.commit()
    db.refresh(user_obj)
    return user_obj


async def authenticate_user(email: str, password: str, db: _orm.Session):
    user = await get_user_by_email(db=db, email=email)

    if not user:
        return False

    if not user.verify_password(password):
        return False

    return user


async def create_token(user: _models.User):
    user_obj = _schemas.User.from_orm(user)

    token = _jwt.encode(user_obj.dict(), JWT_SECRET)

    return dict(access_token=token, token_type="bearer")



async def get_current_user(
        db: _orm.Session = _fastapi.Depends(get_db),
        token: str = _fastapi.Depends(oauth2schema),):
    try:
        payload = _jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        user = db.query(_models.User).get(payload["id"])
    except:
        raise _fastapi.HTTPException(
            status_code=401, detail="Invalid Email or Password")

    return _schemas.User.from_orm(user)


async def _user_selector(id:int, user: _schemas.User, db: _orm.Session):
    user = (
        db.query(_models.User)
        .filter_by(id = user.id)
        .filter(_models.User.id == id)
        .first()
    )
    

    if user is None:
        raise _fastapi.HTTPException(status_code=404, detail="User does not exist")
    

    return user


async def update_user(id: int, new:_schemas.UserUpdate,user: _schemas.User,db:_orm.Session):
    
    user_db = await _user_selector(id,user,db)
    
    user_db.sick = new.sick
    user_db.first_name = new.first_name
    user_db.last_name = new.last_name
    user_db.birth_date = new.birth_date
    user_db.height = new.height
    user_db.weight = new.weight
    db.commit()
    db.refresh(user_db)

    return _schemas.User.from_orm(user_db)


async def get_scrape_news():
    return scrape.scrapedata()
