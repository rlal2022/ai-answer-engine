import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Link } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";
import "swiper/css";

function Cards() {
  const articles = [
    {
      title:
        "Bitcoin Price Prediction for Today, December 5 - BTC Technical Analysis",
      summary:
        "Bitcoin's price fluctuates between $37,000 and $38,500, influenced by Federal Reserve policies and investor sentiment.",
      publisher: "Inside Bitcoin",
      url: "https://insidebitcoins.com/news/bitcoin-price-prediction-for-today-december-5-btc-technical-analysis",
    },
    {
      title:
        "Here's How Much $100 In Bitcoin Could Be Worth In 2030 If Cathie Wood's Price Target Is Reached",
      summary:
        "Predictions suggest Bitcoin's price could range from $94,782 to $101,273 in December 2024, based on historical patterns.",
      publisher: "Yahoo Finance",
      url: "https://finance.yahoo.com/news/heres-much-100-bitcoin-could-190038492.html",
    },
    {
      title: "Experts Predict Bitcoin Could Reach $150K by Year-End",
      summary:
        "Bitcoin's consolidation below $38,000 shows market uncertainty, but analysts remain optimistic about long-term growth.",
      publisher: "Yahoo Finance",
      url: "https://finance.yahoo.com/news/experts-predict-bitcoin-could-reach-081713448.html",
    },
    {
      title:
        "Bitcoin price prediction for December, according to BTC historical returns",
      summary:
        "Bitcoin’s recent consolidation below $38,000 reflects the uncertainty in the market. Analysts are optimistic about long-term growth due to increasing institutional interest and adoption, which could contribute to further price appreciation in the coming months",
      publisher: "Finbold",
      url: "https://finbold.com/bitcoin-price-prediction-for-december-according-to-btc-historical-returns/",
    },
  ];

  return (
    <Swiper
      direction="vertical"
      slidesPerView={2}
      spaceBetween={-350}
      className="h-screen"
    >
      {articles.map((article, idx) => (
        <SwiperSlide key={idx}>
          <div className="h-full flex items-center justify-center">
            <Card className="w-[700px] h-[250px] bg-zinc-900 text-white">
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
                <CardDescription className="text-md text-white truncate">
                  {article.publisher}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p>{article.summary}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-none rounded-full w-8 h-8 flex items-center justify-center mt-4 hover:bg-gray-300"
                  >
                    <Link className="w-4 h-4" color="black" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Cards;
