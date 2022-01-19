import './Main.scss'
import {Gallery} from './Gallery'
import billede1 from '../../../assets/images/Image-Sustainability.jpg'
import billede2 from '../../../assets/images/Image-Leave-No-One.jpg'
import billede3 from '../../../assets/images/Image-Hunger.jpg'
import logo from '../../../assets/images/UN-Logo-Large.png'



//making array fot displaying the pictures
const arrImages = [
  {
    id:1,
    image:"../../../assets/images/Goals/Goal-No-Poverty.png",
    name:"No poverty"
  },
  {
    id:2,
    image:"../../../assets/images/Goals/Goal-No-Hunger.png",
    name:"No hunger"
  },
  {
    id:3,
    image:"../../../assets/images/Goals/Goal-Good-Health.png",
    name:"Goal Good Health"
  },
  {
    id:4,
    image:"../../../assets/images/Goals/Goal-Good-Education.png",
    name:"Goal-Good-Education"
  },
  {
    id:5,
    image:"../../../assets/images/Goals/Goal-Gender-Equality.png",
    name:"Goal GenderEquality"
  },
  // {
  //   id:2,
  //   image:"http://api.mediehuset.net/images/sdg/photos/2.jpg",
  //   name:"Fattifdom og sult"
  // }
]



export const Main = () => {
  return(
    <main className="main">

      {/* FIRST SECTION in the main */}
      <section>
       <h3 className='sectionHeader'>DE 17 VERDENSMÅL</h3>
       <p className='sectionSubHeader'>På FN topmødet i New York i 2015 vedtog verdens stats- og regeringsledere en hidtil uset ambitiøs og samfundsforandrende udviklingsdagsorden, også kaldt 2030 dagsordenen.</p>
       <p className='sectionSubHeader'>Frem til 2030 skal denne dagsorden sætte kurs mod en mere bæredygtig udvikling for både mennesker og planeten, vi bor på.</p>

        <div className='articlediv'>
          <article>
          <h4>Verdensmålene forpligter.</h4>
          <p>Medlemslandende forpligter sig til helt at afskaffe fattigdom og sult i verden, sikre god uddannelse og sundhed til alle, reducere ulighed, fremme ligestilling, anstændige jobs, bæredygtig vækst og forbrug.</p>
          <p>Den nye dagsorden anerkender således at social, økonomisk og miljømæssig udvikling, fred, sikkerhed og internationalt samarbejde er tæt forbundet, og at det kræver en integreret indsats at opnå holdbare udviklingsresultater.</p>
          </article>
        
          <article>
              <h4>Verdensmålene gælder alle.</h4>
              <p>Målene gælder alle lande - både rige og fattige - dvs. de er universelle.</p>
              <p>Udfordringer som social, økonomisk  marginalisering, stigende ulighed, fødevareusikkerhed,  ulig adgang til grundlæggende naturressourcer,og har regionale og globale konsekvenser.</p>
              <p>Det er derfor afgørende at alle lande leverer og løfter opgaven i fællesskab.</p>
          </article>
        </div>
       </section>

      {/* SECOND SECTION in the main, GALLERY of 17 pictures */}
      <section id="listofpictures">
        <h3 className='sectionHeader'>DELMÅLENE</h3>
        <span><a href='#header'>Tilbage til top</a></span>
        <p className='sectionSubHeader'>FN's 17 Verdensmål er opdelt i 169 delmål. Delmålene er mere konkrete mål for, hvordan Verdensmålene skal opfyldes. For at måle på hvert delmål har FN formuleret en række indikatorer for de enkelte delmål.</p>
        <p>Se eksempler på enkelte delmål her:</p>
         
         {/* image gallery */}
          <Gallery imageList={arrImages}/>
      </section>


    {/* THIRD SECTION in the main, articles */}
      <section id="sectionUdfordringer">
        <h3 className='sectionHeader'>UDFORDRINGER</h3>
        <span><a href='#header'>Tilbage til top</a></span>
        <p className='sectionSubHeader'>Der er en lang række faktorer der har indvirkning på opfyldelsen af de mål, man gennem aftaler har forpligtiget sig til.</p>

        <h5>Vækst vs. bæredygtighed.</h5>
        <figure>
            <figcaption>
                <article>
                    <p>En overordnet udfordring er, at der mangler et mere nuanceret syn på sammenhængen mellem vækst og bæredygtighed. Vægtning mellem økonomisk vækst og påvirkninger af miljø og samfund.</p>
                    <p>Opretholdes den nuværende globale, materielle vækst, øges presset på jordens ressourcer.</p>
                    <p>De livsunderstøttende økosystemer bliver i stigende grad overbelastet, og uligheden i verden vil blive større.</p>
                </article>
            </figcaption>
            <img src={billede1} alt="billede1" />
        </figure>

        <h5>Leave no-one behind.</h5>
        <figure>
            <figcaption>
                <article>

                    <p>I 2030-dagsordenen er inkluderet princippet om ”leave no one behind”. Princippet tilsiger, at alle lande skal opnå alle verdensmål, uden at nogen lades i stikken.</p>
                    <p>Arbejdet med verdensmålene skal begynde med, at de fattigste og mest marginaliserede adresseres først.</p>
                    <p>Dette er et vigtigt princip, hvortil også efterlevelsen af og respekten for menneskerettigheder er altafgørende.</p>
                    <p>Med ander ord: “Leave On-One behind”.</p>
                </article>
            </figcaption>
            <img src={billede2} alt="billede2" />
            
        </figure>
        <h5>Fattigdom og sult.</h5>
        <figure>
            <figcaption>
                <article>

                    <p>Afskaffelsen af alle former for fattigdom er fortsat en af de største udfordringer for menneskeheden.</p>
                    <p>Mens antallet af mennesked, der lever i ekstrem fattigdom, er halveret - fra 1,9 milliarder i 1990 til 736 millioner i 2015 - kæmper alt for mange stadig med at få opfyldt deres mest basale menneskelige behov.</p>
                    <p>Verdensbanken definerer ”ekstrem fattigdom” som en personlig indkomst på under 1,9 dollars om dagen – dvs. cirka 13 kroner.</p>
                </article>
            </figcaption>
            <img src={billede3} alt="billede3" />
        </figure>
      </section>

    {/* FOURTH SECTION in the main, KONTAKT part */}
      <section id="section5">
        <h3 className='sectionHeader'>KONTAKT OS</h3>
        <span><a href='#header'>Tilbage til top</a></span>
        <h4>Kontakt os og hør mere om De Sytten Verdensmål. Udfyld formularen herunder:</h4>
        <div className="gridform">
            <img src={logo} alt="logo"/>
            {/* Formular not validated */}
            <form>
                        <div>
                            <input type="text" name="name" id="name" placeholder="Indtast dit fulde navn"></input>
                        </div>
                        <div>
                            <input type="email" name="email" id="email" placeholder="Indtast gyldig E-mail"></input>
                        </div>
                        <div>

                            <input type="number" name="telefon" id="telefon" placeholder="Indtast Telefonnummer"></input>
                        
                        </div>
                        <div>
                            <textarea type="textarea" name="textarea" id="textarea" placeholder="Evt. besked."></textarea>
                        </div>
                        <div className="buttons">
                            <button id="fortryd" type="reset">FORTRYD</button>
                            <button id="send" type="button">SEND</button>
                        </div>
                        <span id="feedback"></span>
                </form>
        </div>
      </section>
    </main>
  )
}