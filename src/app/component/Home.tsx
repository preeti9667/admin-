
import style from '@/app/style/mainPage.module.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function HomeM(){
return(
    <>
     <div >
      <div className={style.homeContent}>
          <h2 className={style.homeContentH2}>Top Rated</h2>
          <button className={style.homeContentButton}>View All</button>
      </div>
      <div className={style.homeContent2}>
        <div className={style.homeContent2Flex}>
        <button className={style.content2FlexBtn}><ArrowBackIosIcon/></button>
        <button className={style.content2FlexBtn}><ArrowForwardIosIcon/></button>
</div>
      </div>

      <div className={style.homeContent}>
          <h2 className={style.homeContentH2}>Latest</h2>
          <button className={style.homeContentButton}>View All</button>
      </div>
      <div className={style.homeContent2}>
        <div className={style.homeContent2Flex}>
        <button className={style.content2FlexBtn}><ArrowBackIosIcon/></button>
        <button className={style.content2FlexBtn}><ArrowForwardIosIcon/></button>
</div>
      </div>

      <div className={style.homeContent}>
          <h2 className={style.homeContentH2}>Min 10% Off</h2>
          <button className={style.homeContentButton}>View All</button>
      </div>
      <div className={style.homeContent2}>
        <div className={style.homeContent2Flex}>
        <button className={style.content2FlexBtn}><ArrowBackIosIcon/></button>
        <button className={style.content2FlexBtn}><ArrowForwardIosIcon/></button>
</div>
      </div>
    </div>
  
    </>
)
}