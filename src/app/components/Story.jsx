import React from "react";
import "../styles/story.css";
import Scomp from "./Storycomp";
const Cards = [
  {
    logo: "g",
    backgroundimage:
      "https://mgl.gogo.mn/newsn/story/mobicom-dotor-6764d99535db4822975842.jpg",
    text: "Дэлхийн 200 гаруй улсад ашиглаж болох Global Data eSim-ний талаар та юу мэдэх ёстой вэ",
  },
  {
    logo: "g",
    backgroundimage:
      "https://mgl.gogo.mn/newsn/story/zurag-29-154219-467089760-6764cd4312901885474402.jpeg",
    text: "Хөрсөнд ургасан бүхэн органик биш",
  },
  {
    logo: "g",
    backgroundimage:
      "https://mgl.gogo.mn/newsn/story/1-3-6764cce61c0dd664440065.jpeg",
    text: "Японы Фүкүшима хот хогоо ангилж хаяагүй иргэдийн нэрийг нийтэд мэдээлдэг болно",
  },
  {
    logo: "g",
    backgroundimage:
      "https://mgl.gogo.mn/newsn/story/nomiinbayr-10-134724-18453572541-6764cc8ceec15160327054.jpeg",
    text: "Хүүхэд эхний удаа уншихад 20, хоёр дахиа уншихад 68 хувьтай ойлгодог",
  },
  {
    logo: "g",
    backgroundimage:
      "https://mgl.gogo.mn/newsn/story/tog-togtasralt-18-161219-13007780191-6764cc12c64dd561938572.jpeg",
    text: "ФОТО: Хэзээ бид өвлийг тогтой, утаагүй, түгжрэлгүй, гантиг зам дээр уначихгүй давах бол",
  },
  {
    logo: "g",
    backgroundimage:
      "https://mgl.gogo.mn/newsn/story/picture3-6763bb4641451633437386.jpg",
    text: "Эвсэг брэнд 60% хүртэл шинэ жилийн хямдралт худалдаа зарлалаа",
  },
  {
    logo: "g",
    backgroundimage:
      "https://mgl.gogo.mn/newsn/story/18122024-1734511776-1522445918-01-6763a452845c0059156466.jpg",
    text: "MN Tower: Бэлэн түрээслэгчтэй 1000-10000 мкв талбай худалдана",
  },
  {
    logo: "g",
    backgroundimage:
      "https://mgl.gogo.mn/newsn/story/logo-6763a40917fa9510325544.jpg",
    text: "“Орано Майнинг” компаниас мэдэгдэл гаргалаа",
  },
  {
    logo: "g",
    backgroundimage:
      "https://mgl.gogo.mn/newsn/story/1-676389406aa4f387425269.jpg",
    text: "Тэтгэврийн хэмжээг зургаан хувиар нэмэгдүүллээ",
  },
  {
    logo: "g",
    backgroundimage: "https://mgl.gogo.mn//newsn/v4/images/author.df8ba556.svg",
    text: "Монголчууд 2024 онд Google-ээс ямар үгийг хамгийн их хайсан бэ?",
  },
  {
    logo: "g",
    backgroundimage:
      "https://mgl.gogo.mn/newsn/story/u7anwju64zfldof5wdlgxxio7u-6763792553f9a514269112.jpg",
    text: "Сансарт гацсан НАСА-ийн нисгэгчдийн буцаж ирэх хугацаа дахин хойшилжээ",
  },
  {
    logo: "g",
    backgroundimage:
      "https://mgl.gogo.mn/newsn/story/picture1-6762761267e3d207646629.jpg",
    text: "Huawei нь ULTIMATE DESIGN үзэл баримтлалаа тодорхойлох шинэ загваруудаа танилцууллаа",
  },
];
export const Gogo = () => {
  return (
    <div className="GoGo">
      <h1>GoGo</h1>
      <p>story</p>
    </div>
  );
};
export const Story = () => {
  return (
    <div className="Story">
      {Cards.map((ne) => {
        return (
          <Scomp
            logo={ne.logo}
            backgroundimage={ne.backgroundimage}
            text={ne.text}
          />
        );
      })}
    </div>
  );
};
