import datetime as _dt
from requests_html import HTMLSession

import sqlalchemy as _sql
import sqlalchemy.orm as _orm
import passlib.hash as _hash

import database as _database


class User(_database.Base):
    __tablename__ = "users1"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    email = _sql.Column(_sql.String, unique=True, index=True)
    hashed_password = _sql.Column(_sql.String)
    first_name = _sql.Column(_sql.String)
    last_name = _sql.Column(_sql.String)
    birth_date = _sql.Column(_sql.String)
    weight = _sql.Column(_sql.Integer)
    height = _sql.Column(_sql.Integer)
    sick = _sql.Column(_sql.Integer)

    def verify_password(self, password: str):
        return _hash.bcrypt.verify(password, self.hashed_password)





class Scraper():
    

    def __init__(self):
        self.backup = [
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY5MS84NDU3NDIyL3JhdWxiYWR1ZWwuanBn.jpg",
            "header": "โควิดคร่าชีวิต อดีตรัฐมนตรีเวเนซุเอลา ขณะถูกคุมขังในเรือนจำของหน่วยสืบราชการลับ",
            "detail": "ราอูล บาดูเอล อดีตนายพล และรัฐมนตรีกระทรวงกลาโหม เสียชีวิตแล้วในเรือนจำ จากการติดเชื้อ #โควิด19",
            "link": "https://www.sanook.com/news/8457422/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY5MS84NDU2OTc4L2NvdmlkMTkuanBn.jpg",
            "header": "เดนมาร์กไฟเขียว ทดลองรักษาโควิด-19 \"แบบสูดดม\" ในมนุษย์",
            "detail": "รพ.มหาวิทยาลัยโคเปนเฮเกน เผย การรักษาผู้ป่วย #โควิด19 แบบสูดดมรูปแบบใหม่ ได้รับการอนุมัติให้ทดลองทางคลินิกในมนุษย์แล้ว",
            "link": "https://www.sanook.com/news/8456978/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY5MS84NDU1Mzk0L3Nhbm9va190aHVtYm5haWxfMTIwMHg3MjAoMjcuanBn.jpg",
            "header": "CDC เผย สหรัฐฯจะรับชาวต่างชาติ ที่ฉีดวัคซีน 6 ชนิด ที่ FDA และ WHO รับรองเท่านั้น",
            "detail": "สหรัฐจะยอมรับชาวต่างชาติที่ฉีดวัคซีนป้องกันโรคโควิด-19 ซึ่งได้รับการอนุมัติจากสำนักงานอาหารและยา (FDA) ของสหรัฐ หรือจากองค์การอนามัยโลก (WHO) ซึ่งมีอยู่ด้วยกัน 6 ชนิดเท่านั้น",
            "link": "https://www.sanook.com/news/8455394/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY5MC84NDU0NzY2L3Nhbm9va190aHVtYm5haWxfMTIwMHg3MjAoOCkuanBn.jpg",
            "header": "มีไทยด้วย! อังกฤษถอด 47 ประเทศออกจากลิสต์ประเทศอันตราย คลายมาตรการกักตัวโควิด",
            "detail": "รัฐบาลอังกฤษจะเริ่มผ่อนคลายการใช้มาตรการกักตัวผู้ที่เดินทางมาจากต่างประเทศ รวม 47 ประเทศ รวมทั้ง อินเดีย แอฟริกาใต้ บราซิล ตุรกี และไทย",
            "link": "https://www.sanook.com/news/8454766/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY5MC84NDU0NjE4L2ZpbmxhbmQtbW9kZXJuYS5qcGc=.jpg",
            "header": "ฟินแลนด์ สั่งชะลอฉีดโมเดอร์นาให้ผู้ชายอายุไม่ถึง 30 ตามสวีเดน-เดนมาร์ก",
            "detail": "ฟินแลนด์ สั่งชะลอฉีดโมเดอร์นาให้ผู้ชายอายุน้อยกว่า 30 ปี ตามสวีเดนและเดนมาร์ก ผวาอาการกล้ามเนื้อหัวใจอักเสบ",
            "link": "https://www.sanook.com/news/8454618/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY5MC84NDU0NTgyL3N3ZWRlbi1kZW5tYXJrLXBhdXNlLW1vZGVybmEucG5n.png",
            "header": "สวีเดน-เดนมาร์ก สั่งหยุดฉีดวัคซีนโควิด \"โมเดอร์นา\" ให้คนอายุน้อย หลังพบผลข้างเคียง",
            "detail": "หน่วยงานด้านสุขภาพของสวีเดนเปิดเผยว่า จะระงับการใช้วัคซีนของโมเดอร์นาสำหรับผู้ที่เกิดตั้งแต่ปี 2534 เป็นต้นไป เนื่องจากข้อมูลบ่งชี้ว่าเด็กและคนหนุ่มสาวที่ฉีดวัคซีนของโมเดอร์นามีอาการกล้ามเนื้อหัวใจอักเสบและเยื่อหุ้มหัวใจอักเสบ",
            "link": "https://www.sanook.com/news/8454582/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY5MC84NDU0MDc4L21vbC5qcGc=.jpg",
            "header": "ยาต้านโควิด \"โมลนูพิราเวียร์\" คาดเข้าไทย ธ.ค.นี้ ย้ำห้ามใช้กับเด็ก-คนท้อง",
            "detail": "อธิบดีกรมการแพทย์ คาด ไทยได้ยาโมลนูพิราเวียร์ ธ.ค. นี้ ใช้กับกลุ่มปัจจัยเสี่ยงต่ออาการรุนแรงเท่านั้น",
            "link": "https://www.sanook.com/news/8454078/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY5MC84NDUzMTkwL3BmaXplci13YW5lcy1lZmZlY3RpdmVuZXNzLmpwZw==.jpg",
            "header": "วัคซีนไฟเซอร์ ประสิทธิภาพลดเหลือ 47% หลังฉีดครบ 2 เข็มนาน 6 เดือน",
            "detail": "ผลการศึกษาเผยประสิทธิภาพของวัคซีนไฟเซอร์ลดลงเหลือ 47% หลังฉีดครบ 2 เข็มนาน 6 เดือน",
            "link": "https://www.sanook.com/news/8453190/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY5MC84NDUyNTE4L21vbG51LmpwZw==.jpg",
            "header": "ข่าวดี \"โมลนูพิราเวียร์\" ยาต้านโควิดทดลองได้ผล ไทยเจรจาจองไว้แล้วสำหรับ 2 แสนคน",
            "detail": "ข่าวดี \"โมลนูพิราเวียร์\" ยาต้านโควิดทดลองได้ผล ลดตาย-ป่วยหนัก ทำหุ้นบริษัทวัคซีนร่วง กรมการแพทย์เจรจาจองไว้แล้วสำหรับ 2 แสนคน",
            "link": "https://www.sanook.com/news/8452518/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY5MC84NDUwODgyL2NhdC5qcGc=.jpg",
            "header": "ทางการท้องถิ่นจีนฆ่าแมวติดโควิด 3 ตัว หวั่นแพร่เชื้อสู่มนุษย์",
            "detail": "ทางการส่วนท้องถิ่นเมืองฮาร์บิน ทางเหนือของจีน ได้ฆ่าแมวเลี้ยง 3 ตัว หลังจากพบว่าแมวเหล่านั้นมีผลตรวจ #โควิด19 เป็นบวก",
            "link": "https://www.sanook.com/news/8450882/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY5MC84NDUwNzk4L3VuaXRlZC1haXJsaW5lcy12YWNjaW5lLXRuLnBuZw==.png",
            "header": "ยูไนเต็ดแอร์ไลน์ จ่อปลดพนักงานเกือบ 600 คน ที่ปฏิเสธไม่ยอมฉีดวัคซีนโควิด",
            "detail": "ยูไนเต็ด แอร์ไลน์ เตรียมเลิกจ้างพนักงานเกือบ 600 คน ที่ไม่ปฏิบัติตามนโยบายในการไปรับการฉีดวัคซีนโควิด",
            "link": "https://www.sanook.com/news/8450798/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY4OS84NDQ5OTkwL2JpZGVuLWJvb3N0ZXItZG9zZS10bi5wbmc=.png",
            "header": "ไบเดน ถลกแขนเสื้อรับวัคซีนไฟเซอร์กระตุ้นภูมิเป็นเข็ม 3 หวังฉีดให้ชาวอเมริกันอย่างทั่วถึง",
            "detail": "\"โจ ไบเดน\" ประธานาธิบดีสหรัฐฯ ได้รับการฉีดวัคซีนกระตุ้นภูมิคุ้มกันโควิด-19 แล้ว หลังจากรัฐบาลเพิ่งอนุมัติการฉีดวัคซีนบูสเตอร์เข็มที่ 3 จากบริษัทไฟเซอร์ (Pfizer) ให้กับชาวอเมริกันเฉพาะกลุ่มไปเมื่อไม่กี่วันก่อน",
            "link": "https://www.sanook.com/news/8449990/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY4OS84NDQ5OTIyL3B6LWNlby0yNzA5MjEtdG4ucG5n.png",
            "header": "ซีอีโอไฟเซอร์ คาดโลกจะกลับมาเป็นปกติภายใน 1 ปี แต่อาจต้องฉีดวัคซีนโควิดซ้ำทุกปี",
            "detail": "นายอัลเบิร์ต เบอร์ลา ประธานเจ้าหน้าที่บริหารของบริษัทไฟเซอร์ กล่าวว่า โลกจะกลับมาใช้ชีวิตได้ตามปกติอีกครั้งภายใน 1 ปี และมีแนวโน้มว่าในอนาคตวัคซีนป้องกันโควิด-19 จะกลายเป็นวัคซีนประจำปีที่ทุกคนต้องฉีดซ้ำเพื่อป้องกันโรค",
            "link": "https://www.sanook.com/news/8449922/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY4OS84NDQ4MTM0L3ZhY2NpbmVzLmpwZw==.jpg",
            "header": "เด็กดัตช์วัย 12 ขวบ ชนะคดี ฟ้องศาลขอฉีดวัคซีนโควิด เพื่อไปดูใจคุณยาย",
            "detail": "ศาลเนเธอร์แลนด์ ตัดสินให้ เด็กชายวัย 12 ปี ชนะคดี ขอฉีด #วัคซีนโควิด เพื่อไปดูใจคุณยายที่ป่วยมะเร็งปอด แม้พ่อจะคัดค้าน",
            "link": "https://www.sanook.com/news/8448134/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY4OS84NDQ2NDAyL3BmaXplci12YWNjaW5lLWNoaWxkcmVuLXN0dWR5LnBuZw==.png",
            "header": "ไฟเซอร์-ไบออนเทค เผยวัคซีนโควิดปลอดภัย-ได้ผลดีในเด็กอายุ 5-11 ปี ใช้ 1/3 โดสปกติ",
            "detail": "บริษัทไฟเซอร์และไบออนเทค ระบุว่า วัคซีนป้องกันโควิด-19 ของบริษัทมีประสิทธิภาพในการสร้างภูมิคุ้มกันที่แข็งแกร่งให้กับเด็กอายุ 5-11 ปี และบริษัทวางแผนที่จะขออนุมัติจากหน่วยงานกำกับดูแลโดยเร็วที่สุดเพื่อฉีดวัคซีนให้กับเด็กในช่วงอายุดังกล่าวในสหรัฐอเมริกา ยุโรป และที่อื่นๆ",
            "link": "https://www.sanook.com/news/8446402/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY4OS84NDQ1MTk4L3RpZ2VyLmpwZw==.jpg",
            "header": "สิงโต-เสือ ทั้งหมดในสวนสัตว์แห่งชาติสหรัฐฯ ส่อแววติดโควิด-19",
            "detail": "สวนสัตว์แห่งชาติสมิธโซเนียน ณ กรุงวอชิงตัน ดี.ซี. เมืองหลวงของสหรัฐฯ เผย สิงโตและเสือทั้งหมดในสวนสัตว์ มีผลตรวจเชื้อ #โควิด19 ที่สันนิษฐานว่าเป็นบวก",
            "link": "https://www.sanook.com/news/8445198/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY4OC84NDQ0ODYyL3BmaXplci5qcGc=.jpg",
            "header": "คณะที่ปรึกษา FDA สหรัฐฯ ลงมติต้านการฉีด \"ไฟเซอร์\" เข็ม 3 ให้ประชากรโดยรวม",
            "detail": "คณะที่ปรึกษา FDA สหรัฐฯ ลงมติ ไม่เเนะนำให้มีการฉีดวัคซีนของไฟเซอร์เป็น \"เข็มกระตุ้นภูมิ\" หรือเข็มที่ 3 สำหรับประชากรอเมริกันทุกรายที่อายุ 16 ปี ขึ้นไป",
            "link": "https://www.sanook.com/news/8444862/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY4OC84NDQ0NDUwL3Bobm9tcGVuaHNjaG9vbC1yZW9wZW4uanBn.jpg",
            "header": "กรุงพนมเปญ เปิดเรียน ม.3-ม.6 หลังครูในเมืองหลวงฉีดวัคซีนครบ 2 โดสแล้ว 94%",
            "detail": "กรุงพนมเปญ เปิดเรียนออนไซต์ชั้น ม.3-ม.6 หลังครูในเมืองหลวงกัมพูชาแห่งนี้ได้รับวัคซีนครบ 2 โดสแล้ว 94%",
            "link": "https://www.sanook.com/news/8444450/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY4OC84NDQ0MjQyL2NoaW5hLW92ZXItMS1iaWxsaW9uLXZhY2NpbmF0ZWQucG5n.png",
            "header": "จีนประกาศฉีดวัคซีนโควิดให้ประชาชนครบโดสแล้วกว่า 1 พันล้านคน แซงหน้าสหรัฐ-ยุโรป",
            "detail": "จีนฉีดวัคซีนโควิดครบโดสให้ประชาชนไปแล้วกว่า 1 พันล้านคน หรือ 70% ของจำนวนประชากรทั้งประเทศ แซงหน้าสหรัฐอเมริกาและยุโรป",
            "link": "https://www.sanook.com/news/8444242/"
        },
        {
            "img": "https://s.isanook.com/ns/0/rp/r/w250/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL25zLzAvdWQvMTY4OC84NDQzNDc4L2ZyYW5jZS5qcGc=.jpg",
            "header": "ฝรั่งเศสมอบสัญชาติให้ \"ด่านหน้า\" ตอบแทนที่ช่วยพาประเทศพ้นวิกฤตโควิด-19",
            "detail": "ฝรั่งเศสให้สัญชาติบุคลากรสาธารณสุข พนักงานทำความสะอาด พนักงานแคชเชียร์ คนดูแลเด็ก-คนชรา และพนักงานเก็บขยะ กว่า 12,000 คน",
            "link": "https://www.sanook.com/news/8443478/"
        }
        ]
    def scrapedata(self):
        url = 'https://www.sanook.com/news/tag/%E0%B8%AD%E0%B8%B1%E0%B8%9B%E0%B9%80%E0%B8%94%E0%B8%95%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B9%82%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%94-19%E0%B9%83%E0%B8%99%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8/'
        s = HTMLSession()
        r = s.get(url)
        if r.status_code == 200:
            news = r.html.find('article')
            return_data = []
            for n in news:
                s = n.find('div')
                pic = s[0]
                d = pic.find('div.thumbnailImg',first=True).find('img',first=True)
                img_src = d.attrs['src']

                detail = n.find('div.desc',first=True)
                header = detail.find('h3',first=True).find('span',first=True).text.strip()
                news_link = detail.find('h3',first=True).find('a',first=True).attrs['href']
                paragraph = detail.find('p',first=True).text.strip()
        
                item={
                    'img':img_src,
                    'header':header,
                    'detail':paragraph,
                    'link':news_link
                }
                return_data.append(item)
            # print(return_data)
            return return_data[:12]
                
        else:
            # print(self.backup)
            return self.backup
