import React from "react";
import "../styles/news.css";
import List from "./List";
import Rightnews from "./Rightnews";
import Trend from "./Trend";
const medee = [
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/326310-24122024-1735007138-2042239357-huuhed_nyrai_nylh_huuhed1.jpg",
    title: "Бага насны хүүхдүүдийн дунд менингококкт халдвар бүртгэгджээ",
    description:
      " Бага насны хүүхдүүдийн дунд менингококкт халдвар бүртгэгдэж байна гэж ХӨСҮТ-өөс мэдээллээ.",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/326308-24122024-1735006900-1542965502-KVKRJA4J4VMMVA4H5XYLLQOIHY.jpg",
    title: "Зеленський: Умард Солонгос Орос руу нэмэлт цэрэг илгээж магадгүй",
    description:
      "Украины Ерөнхийлөгч даваа гарагт Умард Солонгосыг Оросын армид нэмэлт цэрэг болон",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/326309-24122024-1735006569-2111590869-d394af38-477f-4692-a87e-643db2458043.jpg",
    title:
      " Монголбанк: Төв банк хараат бус байдлаа хангах эрх зүйн шинэчлэл хийх шаардлагатай ",
    description:
      "Монгол Улсын Төв банк хараат бусаар Засгийн газартай хамтран ажилласнаар инфляцын",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/326306-24122024-1735004358-676918650-Screenshot_2024-12-24_093857.jpg",
    title:
      "ЦЕГ: Хичээл хийгээгүй, үгэнд ороогүй гэх шалтгаанаар хүүхэд зодсон багшийг шалгаж байна",
    description:
      "Цахим сүлжээнд өчигдөр (2024.12.23) сурагчийг алгадаж, өшиглөж буй багшийн бичлэг",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/326305-24122024-1735003687-15245202-6f982980-c18c-11ef-b72d-71d4fd58cf13.jpg",
    title:
      "НАСА-ийн хөлөг анх удаа нартай хамгийн ойр очих оролдлого хийж байна",
    description:
      "НАСА-гийн сансрын хөлөг нар руу хамгийн ойртох түүхэн оролдлогыг хийж байна. Тодруулба",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/326303-24122024-1735001168-55721986-Screenshot_2024-12-24_084536.jpg",
    title: "50 мянган жилийн өмнө хөлдсөн арслан зааны тугал олжээ",
    description:
      "Дэлхийн дулаарлаас үүдэн мөнх цэвдгүүд хайлж буй. Тухайлбал, Сибирийн Якутск-д байрлах",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/np/2024/03/11/barilga_barilgajilt_avilgahoroolol_aquagarden_hot_ulaanbaatarhot-4-152742-3170909661.jpeg",
    title: "Цас орсон өдрийн агаарын чанар ямар байна вэ?",
    description:
      "Агаарын чанарын индексийн хэмжилтийг заадаг agaar.mn сайтад мэдээлж буйгаар өнөөдөр 08:15 цагийн ",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/326278-23122024-1734945436-524656312-MixCollage-23-Dec-2024-05-17-PM-58351.jpg",
    title: "Цас орсон өдрийн агаарын чанар ямар байна вэ?",
    description:
      "Агаарын чанарын индексийн хэмжилтийг заадаг agaar.mn сайтад мэдээлж буйгаар өнөөдөр",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/326302-24122024-1734999292-1488988501-3443.jpg",
    title: "2024 онд дэлхий дахинд өрнөсөн онцлох үйл явдлууд",
    description:
      "2024 он гарсан эхний өдөр Япон улсын Ишикава мужид 7.6 магнитудын хүчтэй газар",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/11/-08112024-1731022949-1997003339-251396-20022020-1582157098-441564515-tsasan_shuurga1.jpeg",
    title: "Ассадын эхнэр салах өргөдлөө өгсөн гэх мэдээлэлд Кремль хариу өгөв",
    description:
      "Сирийн Ерөнхийлөгч асан Башар аль-Ассадын Их Британид төрсөн гэргий нь салах өргөдлөө",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/326299-23122024-1734953054-217104021-musun.jpg",
    title: "Зарим газраар цас орж, шуурна",
    description: "Малчид, иргэд, тээвэрчдийн анхааралд:",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/326300-23122024-1734952199-1798102449-cover.jpg",
    title: "№1: Сурагчдын амралтаар очин хөгжилдөж болох үнэ төлбөргүй газар",
    description:
      "Энэ 7 хоногоос бага ангийн сурагчдын амралт эхэлсэн бол үргэлжлүүлэн дунд, ахлах",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/326281-23122024-1734933510-714045528-MixCollage-23-Dec-2024-01-57-PM-27301.jpg",
    title: "Болз, аял, ажлаа хий: 0-2 насны хүүхэд асрах VIP төв нээгдлээ",
    description:
      "Хайртай бүхнээ халамжил уриатай “Хаппи Фловерс”  компанийн хамт олон 0-2 насны",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/326287-23122024-1734947070-1284942976-471146507_906875534905755_2032365717137572242_n_(1).jpg",
    title:
      "Шахмал түлшний барьцалдуулагчийг дотоодын ямар компаниуд нийлүүлж байв?",
    description:
      "Сайжруулсан шахмал түлш үйлдвэрлээд зургаан жил болж байна. Эхний хоёр жилд утаагүй",
  },
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/326295-23122024-1734945034-1197227740-tsenguun1.jpeg",
    title:
      "Сумынхаа Ус дулаан ОНӨААТҮГ-т дөрвөн ажил давхар гүйцэтгэдэг залууг шагнажээ",
    description:
      "Сүхбаатар аймгийн Түмэнцогт сумын сумын Ус дулаан ОНӨААТҮГ-т 8 дахь жилдээ ажиллаж",
  },
];
const ontsloh = [
  {
    zurag:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/09/323308-30092024-1727667474-1830677-dulaan_stants.jpg",
    garcig:
      "Дулааны III цахилгаан станцын суурин дээр 250 МВт-ын станцыг шинээр барина",
  },
  {
    zurag:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/-23122024-1734914770-1266569758-zurag_1.jpg",
    garcig:
      "Бургер Кингийн 14 дэх салбар Шинэ Улаанбаатар Драгон Терминалд нээгдлээ",
  },
  {
    zurag:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/-24122024-1735010677-2077795534-Cover.jpg",
    garcig: "2024 онд хамтдаа бүтээсэн өсөлтүүд ХАМГИЙН ХҮЧИРХЭГ БАНК",
  },
  {
    zurag:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2024/12/-24122024-1735024182-87276078-Cover.jpg",
    garcig: "“Асуудалгүй” үйлчилгээг ашиглахад бэлэн боллоо",
  },
];
const trend = [
  {
    nomer: "1",
    news: "",
  },
  {
    nomer: "2",
    news: "",
  },
  {
    nomer: "3",
    news: "",
  },
  {
    nomer: "4",
    news: "",
  },
  {
    nomer: "5",
    news: "",
  },
  {
    nomer: "6",
    news: "",
  },
  {
    nomer: "7",
    news: "",
  },
  {
    nomer: "8",
    news: "",
  },
  {
    nomer: "9",
    news: "",
  },
  {
    nomer: "10",
    news: "",
  },
];
export const News = () => {
  return (
    <div className="News">
      <div className="Newsleft">
        <div className="date">
          <div>
            <img src="./date.jpeg" alt="" />
          </div>
          <div className="dates">
            <p>12сарын23</p>
            <p>12сарын22</p>
            <p>12сарын21</p>
            <p>12сарын20</p>
            <p>12сарын19</p>
          </div>
        </div>
        <div className="list">
          {medee.map((medee) => {
            return (
              <List
                image={medee.image}
                title={medee.title}
                description={medee.description}
              />
            );
          })}
          <p>Цааш үзэх</p>
        </div>
      </div>
      <div className="Newsright">
        <img className="ontslog" src="./ontslog.jpeg" alt="" />
        {ontsloh.map((ontsloh) => {
          return <Rightnews zurag={ontsloh.zurag} garcig={ontsloh.garcig} />;
        })}
        {trend.map((trend) => {
          <div>
            <p>Тренд мэдээ</p>
          </div>;
          return <Trend nomer={trend.nomer} news={trend.news} />;
        })}
      </div>
    </div>
  );
};
