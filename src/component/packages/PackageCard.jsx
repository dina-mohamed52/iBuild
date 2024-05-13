import { useState } from "react";

import s from "./PackageCard.module.css"
import { RiVipCrownLine, RiVipDiamondLine } from "react-icons/ri";
import { PiCoinsThin } from "react-icons/pi";
import { useLanguage } from "../../helpers/useLanguage";
function PackageCard ()
{
   const [selectedCard, setSelectedCard] = useState(null);
 const { isArabic } = useLanguage();

 const getTranslation = (english, arabic) => {
   return isArabic ? arabic : english;
 };
  
   const handleCardHover = (cardIndex) => {
     setSelectedCard(cardIndex);
   };

   const handleCardLeave = () => {
     setSelectedCard(null);
  };
  const translateArrow = (arrow) => {
    switch (arrow) {
      case "&rArr;":
        return "\u21D2"; // Unicode for rightwards double arrow
      case "&lArr;":
        return "\u21D0"; // Unicode for leftwards double arrow
      default:
        return arrow;
    }
  };
  return (
    <div className={`${s.container} relative `}>
      <div className="absolute">
        <div className={`  mb-[1rem]  italic ${s.h11}`}>
          <h1>Exclusive packages</h1>
        </div>
        {/* //cards */}
        <div className={``}>
          <div className={` ${s.card} px-5 py-5`}>
            {/* card1111111111111111111111111111111111111111 */}
            <div
              className={` ${s.leftCard} ${
                selectedCard === 0 ? s.selectedCard : ""
              }`}
              onMouseEnter={() => handleCardHover(0)}
              onMouseLeave={handleCardLeave}
            >
              <div className="flex  flex-col-reverse items-center justify-center">
                <h2 className={`${s.header} text-xl font-semibold p-2 `}>
                  ECONOMIC PACKAGE
                </h2>
                <PiCoinsThin
                  color={selectedCard === 0 ? "#cca95d" : "whitesmoke"}
                  size={50}
                />
              </div>
              <div className={`${isArabic ? "text-right" : ""}`}>
                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 0 ? "black" : "[whitesmoke]"
                  }  ${isArabic ? "text-right" : ""} `}
                >
                  {translateArrow(
                    getTranslation(" \u21D2 Electricity", "الكهرباء \u21D0")
                  )}
                </h3>
                <p
                  className={` pl-4 text-${selectedCard === 1 ? "" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: getTranslation(
                      "Swedish wires <br /> 1 air conditioner in reception <br /> Electricity and drainage without Freon pipes <br /> 2 electricity points in each room",
                      "الأسلاك السويدية <br /> مكيف هواء واحد في الاستقبال <br /> الكهرباء والصرف الصحي بدون أنابيب فريون <br /> 2 نقطة كهرباء في كل غرفة"
                    ),
                  }}
                ></p>

                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 0 ? "black" : "[whitesmoke]"
                  }`}
                >
                  {getTranslation("\u21D2 Plumbing", " السباكة \u21D0")}
                </h3>
                <p
                  className={` pl-4 text-${selectedCard === 0 ? "" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: getTranslation(
                      "BK Sharif pipes <br /> 3 pc mixers <br /> bathtub, sink, and base (Lecico) <br /> Smart bathroom insulation",
                      "أنابيب بي كي شريف <br /> 3 قطع مزجاجة <br /> حوض الاستحمام والحوض والقاعدة (ليسيكو) <br /> عزل حمام ذكي"
                    ),
                  }}
                ></p>

                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 0 ? "black" : "[whitesmoke]"
                  }`}
                >
                  {translateArrow(
                    getTranslation("\u21D2 Gypsum board", "لوح جبس \u21D0")
                  )}
                </h3>
                <p
                  className={` pl-4 text-${selectedCard === 0 ? "" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: getTranslation(
                      "Knauf and 3.5mm sheet <br /> Cornish Futech",
                      "كنوف وورقة 3.5 مم <br /> كورنيش فوتيك"
                    ),
                  }}
                ></p>

                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 0 ? "black" : "[whitesmoke]"
                  }`}
                >
                  {" "}
                  {translateArrow(
                    getTranslation("\u21D2 Doors", "الأبواب \u21D0")
                  )}
                </h3>
                <p
                  className={` pl-4 text-${selectedCard === 0 ? "" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: getTranslation(
                      "Alumetal Carpentry 2-inch wood doors <br /> Alumetal bathroom + kitchen",
                      "الألوميتال النجارة أبواب خشبية بسمك 2 بوصة <br /> الحمام + المطبخ الألوميتال"
                    ),
                  }}
                ></p>

                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 0 ? "black" : "[whitesmoke]"
                  }`}
                >
                  {translateArrow(
                    getTranslation("\u21D2 Ceramic", "السيراميك \u21D0")
                  )}
                </h3>
                <p className={` pl-4 text-${selectedCard === 0 ? "" : ""}`}>
                  {getTranslation("Ceramic grounds", "أرضيات سيراميك")}
                </p>

                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 0 ? "black" : "[whitesmoke]"
                  }`}
                >
                  {translateArrow(
                    getTranslation(
                      "\u21D2 Decor-paints",
                      "دهانات -ديكور \u21D0"
                    )
                  )}
                </h3>
                <p
                  className={` pl-4 text-${selectedCard === 0 ? "" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: getTranslation(
                      "Tile wall <br /> Skip 3 brushes and 2 putty knives",
                      "حائط بلاط<br /> سكيب 3 وش و 2 سكينة معجون"
                    ),
                  }}
                ></p>
              </div>
            </div>

            {/* card2222222222222222222222222222222 */}
            <div
              className={` ${s.centerCard} ${
                selectedCard === 1 ? s.selectedCard : ""
              } ml-[-2rem] `}
              onMouseEnter={() => handleCardHover(1)}
              onMouseLeave={handleCardLeave}
            >
              <div className="flex  flex-col-reverse items-center justify-center">
                <h2 className={`${s.header} text-xl font-semibold p-2 `}>
                  EXCELLENT PACKAGE
                </h2>
                <RiVipDiamondLine
                  color={selectedCard === 1 ? "#cca95d" : "whitesmoke"}
                  size={50}
                />
              </div>
              <div className={`${isArabic ? "text-right" : ""}`}>
                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 1 ? "black" : "[whitesmoke]"
                  }`}
                >
                  {translateArrow(
                    getTranslation(" \u21D2 Electricity", "الكهرباء \u21D0")
                  )}
                </h3>
                <ul
                  className={`pl-4 text-${selectedCard === 1 ? "" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: getTranslation(
                      "<li>Swedish wires with warranty <br /> 4 power points/shower point <br /> 2 air conditioners</li>",
                      "<li>الأسلاك السويدية مع الضمان <br /> 4 نقاط طاقة / نقطة دش <br /> 2 مكيفات هواء</li>"
                    ),
                  }}
                ></ul>

                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 1 ? "black" : "[whitesmoke]"
                  }`}
                >
                  {getTranslation("\u21D2 Plumbing", " السباكة \u21D0")}
                </h3>
                <p
                  className={`pl-4 text-${selectedCard === 1 ? "" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: getTranslation(
                      "Water pipes BR with warranty <br /> Duravit sanitary valves <br /> Turkish mixers",
                      "أنابيب مياه بي آر مع الضمان <br /> صمامات صحية Duravit <br /> محولات تركية"
                    ),
                  }}
                ></p>

                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 1 ? "black" : "[whitesmoke]"
                  }`}
                >
                  {translateArrow(
                    getTranslation("\u21D2 Gypsum board", "لوح جبس \u21D0")
                  )}
                </h3>
                <p
                  className={`pl-4 text-${selectedCard === 1 ? "" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: getTranslation(
                      "Knauf 3.5mm sheet <br /> Gypsum library <br /> 50m gypsum board",
                      "ورقة كنوف 3.5 ملم <br /> مكتبة الجبس <br /> لوح جبسي 50 متر"
                    ),
                  }}
                ></p>

                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 1 ? "black" : "[whitesmoke]"
                  }`}
                >
                  {" "}
                  {translateArrow(
                    getTranslation("\u21D2 Doors", "الأبواب \u21D0")
                  )}
                </h3>
                <p
                  className={`pl-4 text-${selectedCard === 1 ? "" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: getTranslation(
                      "Alumetal doors <br /> Polyurethane or polyester paint <br /> Reflecting glass",
                      "أبواب ألميتال <br /> صبغ بولي يوريثين أو بوليستر <br /> زجاج عاكس"
                    ),
                  }}
                ></p>

                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 1 ? "black" : "[whitesmoke]"
                  }`}
                >
                  {translateArrow(
                    getTranslation("\u21D2 Ceramic", "السيراميك \u21D0")
                  )}
                </h3>
                <p
                  className={`pl-4 text-${selectedCard === 1 ? "" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: getTranslation(
                      "Cleopatra porcelain for reception <br /> bathroom, and kitchen",
                      "بورسلين كليوباترا للإستقبال <br /> الحمام والمطبخ"
                    ),
                  }}
                ></p>

                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 1 ? "black" : "[whitesmoke]"
                  }`}
                >
                  {translateArrow(
                    getTranslation(
                      "\u21D2 Decor-paints",
                      "دهانات -ديكور \u21D0"
                    )
                  )}
                </h3>
                <p
                  className={`pl-4 text-${selectedCard === 1 ? "" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: getTranslation(
                      "Wallpaper <br /> Decorative stone putty <br /> GLC insulation sealer",
                      "ورق حائط <br /> معجون حجري ديكوري <br /> مانع تسرب GLC"
                    ),
                  }}
                ></p>
              </div>
            </div>

            {/* card33333333333333333333333333333333 */}
            <div
              className={`${s.rightCard} ${
                selectedCard === 2 ? s.selectedCard : ""
              }`}
              onMouseEnter={() => handleCardHover(2)}
              onMouseLeave={handleCardLeave}
            >
              <div className="flex  flex-col-reverse items-center justify-center">
                <h2 className={`${s.header} text-[1.7rem] font-semibold p-2 `}>
                  VIP PACKAGE
                </h2>
                <RiVipCrownLine
                  color={selectedCard === 2 ? "#cca95d" : "whitesmoke"}
                  size={50}
                />
              </div>
              <div className={`${isArabic ? "text-right" : ""}`}>
                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 2 ? "black" : "[whitesmoke]"
                  }`}
                >
                  {translateArrow(
                    getTranslation(" \u21D2 Electricity", "الكهرباء \u21D0")
                  )}
                </h3>
                <p
                  className={` pl-4 text-${selectedCard === 2 ? "" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: getTranslation(
                      "Certified wires - Schneider panel <br /> Venus LEDs - Cameras + headphones <br /> Air conditioning without Freon pipes",
                      "اسلاك السويدي للكابلات المعتمدة بالضمان <br /> لوح سنايدر <br /> ليدات فينوس - كاميرات + سماعات <br /> تكييف بدون أنابيب فريون"
                    ),
                  }}
                ></p>

                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 2 ? "black" : "[whitesmoke]"
                  }`}
                >
                  {getTranslation("\u21D2 Plumbing", " السباكة \u21D0")}
                </h3>
                <p
                  className={` pl-4 text-${selectedCard === 2 ? "" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: getTranslation(
                      "Water pipes BR - Al-Sharif pipes <br /> Copper valves - Sanitary and mixers",
                      "أنابيب مياه بي آر - أنابيب الشريف <br /> صمامات نحاسية - صحية ومزجاج"
                    ),
                  }}
                ></p>

                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 2 ? "black" : "[whitesmoke]"
                  }`}
                >
                  {translateArrow(
                    getTranslation("\u21D2 Gypsum board", "لوح جبس \u21D0")
                  )}
                </h3>
                <p
                  className={` pl-4 text-${selectedCard === 2 ? "" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: getTranslation(
                      "Knauf and 3.5mm sheet <br /> Gypsum library + Gibson board",
                      "كنوف وورقة 3.5 ملم <br /> مكتبة الجبس + لوح جيبسون"
                    ),
                  }}
                ></p>

                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 2 ? "black" : "[whitesmoke]"
                  }`}
                >
                  {" "}
                  {translateArrow(
                    getTranslation("\u21D2 Doors", "الأبواب \u21D0")
                  )}
                </h3>
                <p
                  className={`pl-4 text-${selectedCard === 2 ? "" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: getTranslation(
                      "Alumetal - Beech wood doors <br /> Veneer or protan paint - Turkish armored door <br /> Aluminum windows and balcony <br /> Reflecting glass",
                      "ألوميتال - أبواب خشب الزان <br /> فينير أو صبغ بروتان - باب مدرع تركي <br /> نوافذ وشرفة من الألمنيوم <br /> زجاج عاكس"
                    ),
                  }}
                ></p>

                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 2 ? "black" : "[whitesmoke]"
                  }`}
                >
                  {translateArrow(
                    getTranslation("\u21D2 Ceramic", "السيراميك \u21D0")
                  )}
                </h3>
                <p
                  className={`pl-4 text-${selectedCard === 2 ? "" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: getTranslation(
                      "Porcelain for reception and roads - Rooms <br /> bathroom, and kitchen sorted",
                      "بورسلين للإستقبال والطرق - الغرف <br /> حمام ومطبخ مرتب"
                    ),
                  }}
                ></p>

                <h3
                  className={`font-meduim text-xl mb-2 text-${
                    selectedCard === 2 ? "black" : "[whitesmoke]"
                  }`}
                >
                  {translateArrow(
                    getTranslation(
                      "\u21D2 Decor-paints",
                      "دهانات -ديكور \u21D0"
                    )
                  )}
                </h3>
                <p
                  className={`pl-4 text-${selectedCard === 2 ? "" : ""}`}
                  dangerouslySetInnerHTML={{
                    __html: getTranslation(
                      "Marble or wood substitute wall - Luxury wallpaper <br /> Goten semi-gloss - Sealer insulation <br /> 3 ready-made paste + 2 face wash",
                      "رخام أو جدار بديل خشبي - ورق حائط فاخر <br /> جوتن شبه لامع - عزل مانع للتسرب <br /> 3 معجون جاهز + 2 غسول وجه"
                    ),
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageCard
