import { useEffect, useState } from "react";
import styles from "views/about/about.module.css";
import importAll from "components/ImportAll";

const images = importAll(require.context("assets/about", false, /\.(jpg)$/));
const text = [
  `Hi! My name is Aleksandra Szcząchor, I am a 24 years old stylist,
fashion designer and a budding photographer living in Poland.
I graduated from Jagiellonian University with a Bachelor's degree in
Culture and Media Management and am currently pursuing a Master's
degree in Press, Advertising and Publishing Photography at the
University of Warsaw. I am also a graduate of the School of Artistic
Fashion Design in Cracow.`,
  `I work as a stylist for fashion editorials, image and e-commerce
photo shoots and music videos. I gained my first experience working
as an assistant stylist and assistant costume designer.`,
  `In 2020 I created my first collection "Girls just wanna ...".
The main inspiration of the collection "Girls just wanna..."
is the feminist Czech film "Daisies" by Vera Chytilová. 
It is a starting point for reflection on women, their feelings
and their place in society. The collection shows the duality 
of female nature. It is portrayed by juxtaposing exaggerated
masculine forms with delicate tulle ruffles. The collection
also refers to women's protests through hand-painted slogans
made from banners. The clothes are made of two contrasting
materials: hand-dyed tyvek and tulle in pastel colors.
The collection includes original accessories - bags
made of tyvek and metal hangers and jewelry made by 3D printing. `,
  `My designs have been featured in fashion editorials,
 music videos and TV shows such as Top Model or Voice Of Poland.`,
  `I am currently working on my second collection. You will see the effects soon.`,
  `I am also interested in photography, mainly portrait, reportage
and fashion photography. I create content for social media and product
photos for cosmetic brands. I am a Grand Press Photo finalist,
nominated for two single photos in the Young Poland category.`,
  `Articles and interviews:`,
];
const links = [
  {
    path: `https://www.glamour.pl/artykul/5-polskich-projektantek-ktore-warto-znac-zanim-zrobi-sie-o-nich-naprawde-glosno-poznalismy-je-podczas-cracow-fashion-awards-2020-201001101013`,
    label:
      "Glamour.pl - 4 polskie projektantki, które warto znać, zanim zrobi się o nich naprawdę głośno. Poznaliśmy je podczas Cracow Fashion Awards 2020",
  },
  {
    path: `https://i-d.vice.com/en_uk/article/wxqynm/meet-the-fashion-students-in-the-first-ever-online-global-design-graduate-show`,
    label:
      "i-d.vice.com - Meet the fashion students in the first ever online global design graduate show",
  },
  {
    path: `https://harelblog.pl/2020/09/26/sapu-dyplomy-2020-najlepsze-kolekcje/`,
    label: "HAREL - SAPU. Dyplomy 2020. Najlepsze kolekcje.",
  },
];

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobile(!(document.documentElement.clientWidth > 720));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.photos}>
        {isMobile ? (
          <img src={images[2]} alt={images[2]} key={images[2]} />
        ) : (
          images.map(image => {
            return <img src={image} alt={image} key={image} />;
          })
        )}
      </div>
      <div className={styles.text}>
        {text.map(item => {
          return (
            <div className={styles.textBox}>
              <span>{item}</span>
            </div>
          );
        })}
        {links.map(link => {
          return (
            <div className={styles.link}>
              <a href={link.path} target="_blank" rel="noreferrer noopener">
                {link.label}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
