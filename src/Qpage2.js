import React from 'react';
import './Qpage2.css';

function Qpage2({ totalscore }) {
  const result = [
    {
      pasta: "你是 Spaghetti Bolognese 波隆那肉醬義大利麵！",
      describe: "Spaghetti Bolognese 是一道義大利經典佳餚，簡單而美味，每一口都充滿了濃郁的風味和豐富的口感。通常使用的是經典的義大利麵條，形狀細長，有著優雅的彎曲，能夠完美地捲住肉醬，讓每一口都能夠充分感受到食材的美味。<br />    肉醬，是這道菜的靈魂所在。波隆那肉醬的製作需要將新鮮的番茄、洋蔥、胡蘿蔔、香草等食材悉心熬煮，使其湯汁濃郁，口感豐富。最特別的是，肉醬中還加入了經過細心烹飪的碎牛肉或豬肉，使得整道菜的風味更加豐富，吃起來更加美味。",
      photo: '/images/Spaghetti_Bolognese.jpg',
      hash: "#經典不敗<br />#番茄、洋蔥、胡蘿蔔<br />#簡單而美味，波隆那肉醬義大利麵"
    },
    {
      pasta: "你是 Carbonara 卡波娜拉義大利麵!",
      describe: "   Carbonara 是一道經典的義大利料理，以其濃郁的口感和簡單的製作方式而著稱。這道菜的主要成分包括義大利麵、雞蛋、帕瑪森乳酪、培根（或意大利風乾肉）、黑胡椒和少量的橄欖油。烹調時，熱騰騰的麵條會與打散的雞蛋和帕瑪森乳酪混合，形成濃稠的醬汁，培根的鹹香則增添了豐富的層次感。<br />    Carbonara 的魅力在於它的簡單卻不失深度的味道，每一口都能享受到蛋奶醬的絲滑與培根的酥脆。這道菜起源於羅馬，歷史悠久，是許多人心目中的經典之選，無論在家中還是餐廳，都是一道受歡迎的美食。 ",
      photo: '/images/Carbonara.jpg',
      hash: "#蛋奶醬<br />#雞蛋、培根、帕瑪森乳酪<br />#卡納赫拉，卡波娜拉"
    },
    {
      pasta: "你是 Fettuccine Alfredo 奶油乳酪醬拌義式寬麵!",
      describe: "   Fettuccine Alfredo 以其濃郁奶香和絲滑口感著稱。這道菜的靈魂在於其簡單卻極致美味的醬汁，主要由奶油和帕瑪森乳酪製成。寬麵條煮熟後，與這款濃稠的乳酪醬充分混合，形成了濃郁的口感和豐富的風味。<br />    這道菜起源於20世紀初的羅馬，由餐廳老闆Alfredo di Lelio創造，旨在為其懷孕的妻子提供營養豐富且容易消化的餐點。如今，Fettuccine Alfredo成為世界各地義大利餐廳的主打菜之一，以其簡單但令人難忘的風味征服了無數食客的心。",
      photo: '/images/456.jpg',
      hash: "#奶油、帕瑪森乳酪<br />#寬麵條<br />#飛踢七尼阿喔斐都"
    },
    {
      pasta: "你是 Lasagna 千層麵!",
      describe: "Lasagna 是義大利料理中的經典代表，以其層層疊疊的結構和豐富的味道而聞名。這道菜通常由寬麵片、肉醬（通常是波隆那肉醬）、白醬（貝夏梅爾醬）和大量的馬蘇里拉乳酪層層疊加而成，烤至金黃。每一層都充滿了濃郁的番茄味、肉香和奶香，帶來豐富的口感和深層的味道。<br />    這道菜起源於義大利北部，如今在全球各地都能找到它的蹤影，是家庭聚餐和節日慶典的熱門選擇。 ",
      photo: '/images/Lasagna.jpg',
      hash: "#寬麵片、肉醬、白醬<br />#馬蘇里乳酪<br />#層層疊疊千層麵",
    },
    {
      pasta: "你是 Pesto Pasta 經典羅勒青醬義大利麵!",
      describe: "Pesto Pasta 是一道充滿清新香氣的義大利麵，以其獨特的綠色醬汁而著稱。這款醬汁主要由新鮮的羅勒葉、松子、大蒜、帕瑪森奶酪和橄欖油製成，這些食材經過細緻研磨後，形成了濃郁的青醬。青醬與義大利麵條混合後，帶來獨特的香氣和鮮美的口感。<br />    Pesto這個詞源自義大利語的“Pestare”，意思是搗碎，這也體現了其製作方法。這道菜起源於義大利的熱那亞，如今已成為全球各地的流行美食。清新的羅勒香氣與義大利麵的結合，使得這道菜清爽且富有營養，適合在各種場合享用。 ",
      photo: '/images/Pesto_Pasta.jpg',
      hash: "#羅勒子、松子、大蒜<br />#清新且充滿活力的<br />#Pestare v. 搗碎"
    },
    {
      pasta: "你是 Penne alla Vodka 伏特加筆管麵!",
      describe: "   Penne alla Vodka 是一道獨特且充滿創意的義大利料理，以其香濃的番茄奶油醬和一絲伏特加的酒香而著稱。這道菜的核心是其獨特的醬汁，主要成分包括番茄醬、奶油、洋蔥、蒜末、辣椒粉和少量的伏特加。伏特加的添加增強了醬汁的風味，使其更加濃郁且層次豐富。筆管狀的 Penne 義大利麵能很好地吸附這款醬汁，每一口都充滿了濃郁的番茄和奶油的味道，並伴有微微的酒香。<br />    Penne alla Vodka 起源於20世紀的美國義大利餐廳，這道菜既有著傳統義大利美食的精髓，又融入了現代的創新元素，深受廣大食客的喜愛。 ",
      photo: '/images/123.jpg',
      hash: "<b>#筆管麵<br /><br />#伏特加<br /><br />#番茄醬、奶油、洋蔥、蒜末、辣椒粉</b>"
    },
    {
      pasta: "你是 Cacio e pepe 黑胡椒起司義大利麵!",
      describe: "Cacio e pepe 是一道經典的羅馬料理，以其簡單卻極致美味的特點而聞名。這道菜的名字直接反映了其主要成分：Cacio（意大利語中的起司，通常是佩科里諾乳酪）和Pepe（黑胡椒）。義大利麵煮熟後，與佩科里諾乳酪和大量新鮮研磨的黑胡椒混合，形成了濃郁的醬汁。<br />    這道菜的魅力在於其簡單的製作過程，但每一口都能感受到乳酪的鹹香和黑胡椒的辛辣。Cacio e pepe完美地展現了意大利料理的精髓，利用簡單的食材創造出豐富的味道和口感，是義大利料理中最純粹的代表之一。 ",
      photo: '/images/Cacio_e_pepe.jpg',
      hash: "#黑胡椒加佩科里諾乳諾<br />#簡單but極致的美味<br />#咖丘ㄟ呸胚"
    },
    {
      pasta: "你是 Pasta primavera 春季蔬菜義大利麵!",
      describe: "Pasta primavera 是一道色彩繽紛、充滿活力的義大利料理，以新鮮的春季蔬菜為主要特點。這道菜通常選用各種時令蔬菜，如花椰菜、甜椒、胡蘿蔔、豌豆和櫛瓜等，這些蔬菜與義大利麵條混合，並搭配橄欖油、大蒜和帕瑪森奶酪，形成清新爽口的味道。<br />    Pasta primavera 的名字來源於意大利語的“春天”，這也反映了這道菜的季節性和新鮮感。這道菜不僅味道鮮美，還富含營養，色彩繽紛的蔬菜讓人食欲大增，特別適合在春夏季節享用，讓人感受到大自然的饋贈和春天的氣息。 ",
      photo: '/images/Pasta_primavera.jpg',
      hash: "#春天喔春天<br />#花椰菜、甜椒、胡蘿蔔、豌豆、櫛瓜<br />#primavera n. 春天"
    },
    {
      pasta: "你是 Puttanesca 義大利煙花女麵!",
      describe: "Puttanesca 是一道風味獨特且充滿地中海風情的義大利料理。這道菜的名稱具有爭議，但其風味卻無可挑剔。主要成分包括番茄、蒜末、黑橄欖、鳳尾魚、辣椒和橄欖油。這些食材混合在一起，形成了酸辣鹹香的醬汁，搭配義大利麵條，口感豐富且層次分明<br />    Puttanesca的魅力在於其強烈的味道，每一口都充滿了地中海的陽光和海風。這道菜傳說起源於義大利的那不勒斯，名字的含義至今眾說紛紜，但其獨特的風味卻深受食客的喜愛，成為義大利餐桌上的經典之選。 ",
      photo: '/images/Puttanesca.jpg',
      hash: "#鳳尾魚<br />#酸辣鹹香<br />#充滿了地中海的陽光和海風"
    },

  ];
  let resultIndex;
  if(totalscore >= 27) {
    resultIndex = 8;
  }
  else if(totalscore >= 25) {
    resultIndex = 7;
  }
  else if(totalscore >= 23) {
    resultIndex = 6;
  }
  else if(totalscore >= 21) {
    resultIndex = 5;
  }
  else if(totalscore >= 19) {
    resultIndex = 4;
  }
  else if(totalscore >= 16) {
    resultIndex = 3;
  }
  else if(totalscore >= 13) {
    resultIndex = 2;
  }
  else if(totalscore >= 10) {
    resultIndex = 1;
  }
  else {
    resultIndex = 0;
  }
  const showresult = result[resultIndex];

  

  return (
    <div className="result-container">
      <h2>{showresult.pasta}</h2>
      <div className="result-inline">
        <div classname="result-hash" dangerouslySetInnerHTML={{__html:showresult.hash}} />
        <img src={showresult.photo} alt={showresult.pasta} className="result-photo" />
      </div>
      <div classname="result-content" dangerouslySetInnerHTML={{ __html: showresult.describe }} />
    </div>
  );

}

export default Qpage2;