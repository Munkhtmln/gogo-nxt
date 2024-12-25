import React from "react";
import Fcomp from "./Firstcomp";
const Ehnii = [
  {
    image:
      "https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/326174-19122024-1734576479-955648620-logo.jpg",
    text: "“Орано Майнинг” компаниас мэдэгдэл гаргалаа",
  },
  {
    image:
      " https://mgl.gogo.mn/newsn/thumbnail/600/images/c/2024/12/326182-19122024-1734589033-1860541414-evseg.jpg ",
    text: "  Эвсэг брэнд 60% хүртэл шинэ жилийн хямдралт худалдаа зарлалаа  ",
  },
  {
    image:
      "  https://mgl.gogo.mn/newsn/thumbnail/600/np/2022/04/13/tsas_gudamj_hawriintsas_ulaanbaatarhot_hot_hotiingudamj-24-161944-13821582911.jpeg",
    text: " Цас орж агаарын чанар “арай” дээрдэв   ",
  },
];
export const Coverbottom = () => {
  return (
    <div className="Coverbottom">
      {Ehnii.map((ny) => {
        return <Fcomp image={ny.image} text={ny.text} />;
      })}
      <img
        className="reklam"
        src="https://mgl.gogo.mn/banner_gogo/banner/2024/12/18/news-b2/videourl/1734507188/906e076bf5d6c9f69205f7bca0b93d64.jpg"
        alt=""
      />
    </div>
  );
};
export default Coverbottom;
