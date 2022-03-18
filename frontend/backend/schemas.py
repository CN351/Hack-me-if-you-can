import datetime as _dt

import pydantic as _pydantic


class _UserBase(_pydantic.BaseModel):
    email: str
    first_name:str
    last_name:str
    sick:int
    birth_date:str
    weight:int
    height:int


class UserCreate(_UserBase):
    hashed_password: str
    
    class Config:
        orm_mode = True


class User(_UserBase):
    id: int

    class Config:
        orm_mode = True


class UserUpdate(_UserBase):
    

    class Config:
        orm_mode = True