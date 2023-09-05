import React from "react";

const ClimaAtual = {
  "day clear sky": "/images/Tempo/Sol.png",
  "night clear sky": "/images/Tempo/Noite.png",

  "day few clouds": "/images/Tempo/SolENuvens.png",
  "night few clouds": "/images/Tempo/Noite.png",

  "day scattered clouds": "/images/Tempo/SolENuvens.png",
  "night scattered clouds": "/images/Tempo/Noite.png",

  "day broken clouds": "/images/Tempo/Nuvens.png",
  "night broken clouds": "/images/Tempo/Nuvens.png",

  "day overcast clouds": "/images/Tempo/Nuvens.png",
  "night overcast clouds": "/images/Tempo/Nuvens.png",

  "day shower rain": "/images/Tempo/Chuva.png",
  "night shower rain": "/images/Tempo/Chuva.png",

  "day rain": "/images/Tempo/Chuva.png",
  "night rain": "/images/Tempo/Chuva.png",

  "day light rain": "/images/Tempo/Tempestade.png",
  "night light rain": "/images/Tempo/Tempestade.png",

  "day heavy intensity rain": "/images/Tempo/Tempestade.png",
  "night heavy intensity rain": "/images/Tempo/Tempestade.png",

  "day thunderstorm": "/images/Tempo/Tempestade.png",
  "night thunderstorm": "/images/Tempo/Tempestade.png",

  "day snow": "/images/Tempo/SolENuvens.png",
  "night snow": "/images/Tempo/Noite.png",

  "day mist": "/images/Tempo/Nuvens.png",
  "night mist": "/images/Tempo/Nuvens.png",
};

interface ClimaTypes {
  horario: string,
  clima: string
  loading?: boolean

}

const Clima: React.FC<ClimaTypes> = ({ horario, clima, loading }) => {
  return (
    <>
      {!loading &&
        <div className="divImagem">
          <img className="Imagem" src={ClimaAtual[horario + clima]} alt="" />
        </div>
      }
      <style jsx>{`
        .divImagem {
          max-width: 900px;
        }
        .Imagem {
          width: 100%;
          heigth: auto;
        }
        @media (max-width: 800px) {
          .divImagem {
            order: 1;
          }
          .Imagem {
            max-width: 100%;
            heigth: auto;
          }
        }
      `}</style>
    </>
  );
};

export default Clima;
