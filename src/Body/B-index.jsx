import React from "react";
import Tr from "./Ribeira.jpg";
import Cl from "./lusiadas.jpg";
import Qu from "./carta.jpg";
import Ba from "./prosopopea.jpg";
import Ro from "./cabelo.jpg";
import Ar from "./marilia.jpg";
import Re from "./brascubas.jpg";
import Na from "./cortico.jpg";
import Mo from "./gato.jpg";
import "./B-estilo.css";
const Body = () => {
    return(
      <div className="pagina">
        <div className="livro">
         <h1 className="eixo">Trovadorismo:</h1>
           <h2>Cantiga da Ribeirinha</h2>
              <img className="imagem" src={Tr} alt="" />
                <div className="paragrafo">
                <p>Cantiga da Ribeirinha” de Paio Soares de Taveirós
                A “Ribeirinha” a que se refere um dos nomes da cantiga é Maria Pais Ribeiro, amante de D.  Sancho I, rei de Portugal entre 1185 e 1211. O poema foi provavelmente dedicado a ela (que seria a “filha de don Paai Moniz”) e tem todas as características típicas de uma cantiga de amo</p>
              </div>
        </div>

        <div className="livro">
          <h1 className="eixo">Classicismo:</h1>
            <h2>Os Lusíadas</h2>
              <img className="imagem" src={Cl} alt="" />
                <p className="paragrafo">Em dez cantos, subdivididos em estrofes de oito versos, Os Lusíadas trata das viagens dos portugueses por “mares nunca dantes navegados”. Uma das características da épica é a narração de episódios históricos ou lendários de heróis que possuem qualidade superior.</p>
        </div>

        <div className="livro">
         <h1 className="eixo">Quinhentismo:</h1>
          <h2>A carta de Pero Vaz de Caminha</h2>
            <img className="imagem" src={Qu} alt="" />
              <p className="paragrafo">Ele documenta a composição física à primeira vista do território. Além disso, narra o episódio do desembarque dos portugueses na praia, o primeiro encontro entre os índios e os colonizadores, e a primeira missa realizada no Brasil.</p>
        </div>

        <div className="livro">
         <h1 className="eixo">Barroco:</h1>
          <h2>Prosopopeia - Bento Texeira</h2>
            <img className="imagem" src={Ba} alt="" />
              <p className="paragrafo">Prosopopéia é um poema épico escrito por Bento Teixeira em 1601 que narra aventuras de Jorge d'Albuquerque Coelho, então governador da Capitania de Pernambuco, considerado o marco inicial do barroco na literatura brasileirO.</p>
        </div>

        <div className="livro">
         <h1 className="eixo">Romantismo:</h1>
          <h2>Cabeleira (1876) - Franklin Távora</h2>
            <img className="imagem" src={Ro} alt="" />
             <p className="paragrafo">O Cabeleira é um romance regionalista do século XIX, do autor cearense Franklin Távora. Foi lançado em 1876. Conta a história de José Gomes e seu pai Joaquim Gomes, ambos precursores do cangaço do nordeste brasileiro, e suas desventuras por Pernambuco.</p>
        </div>

        <div className="livro">
         <h1 className="eixo">Arcadismo:</h1>
          <h2>Marília de Dirceu</h2>
           <img className="imagem" src={Ar} alt="" />
              <p className="paragrafo">As liras de Marília de Dirceu exploram o tema do amor entre dois pastores de ovelhas. No decorrer da obra, o eu lírico expressa seu amor pela pastora Marília e fala sobre suas expectativas futuras. Dentro do contexto do Arcadismo, Dirceu revela a ambição de ter uma vida simples e bucólica ao lado de sua amada.</p>
        </div>

        <div className="livro">
         <h1 className="eixo">Realismo:</h1>
          <h2>Memória de brás cubas</h2>
            <img className="imagem" src={Re} alt="" />
             <p className="paragrafo">A infância de Brás Cubas, como a de todo membro da sociedade patriarcal brasileira da época, é marcada por privilégios e caprichos patrocinados pelos pais. O garoto tinha como “brinquedo” de estimação negrinho Prudêncio, que lhe servia de montaria e para maus-tratos em geral. Na escola, Brás era amigo de traquinagem de Quincas Borbas, que aparecerá no futuro defendendo o humanismo, misto da teoria darwinista com o borbismo: “Aos vencedores, as batatas”, ou seja: só os mais fortes e aptos devem sobreviver.</p>
        </div>

        <div className="livro">
         <h1 className="eixo">Naturalismo:</h1>
          <h2>O Cortiço</h2>
            <img className="imagem" src={Na} alt="" />
              <p className="paragrafo">O livro narra inicialmente a saga de João Romão rumo ao enriquecimento. Para acumular capital, ele explora os empregados e se utiliza até do furto para conseguir atingir seus objetivos. João Romão é o dono do cortiço, da taverna e da pedreira. Sua amante, Bertoleza, o ajuda de domingo a domingo, trabalhando sem descanso.</p>
        </div>

        <div className="livro">
         <h1 className="eixo">Modernismo:</h1>
         <h2>Olhinhos de gato</h2>
         <img className="imagem" src={Mo} alt="" />
         <p className="paragrafo">Publicado inicialmente em capítulos na revista Ocidente, de Lisboa, durante os anos de 1939 e 1940, Olhinhos de gato constitui uma narrativa poética sobre a infância da autora, Cecília Meireles. Uma infância marcada pela perda do pai antes de ela nascer e da mãe antes de completar três anos, sendo criada por sua avó materna, Jacinta.</p>
        </div>
        
      </div>

    );
}

export default Body;