import classes from "./VoiceBoard.module.css";

export default function VoiceBoard(props) {

    const colorNumber1 = Math.floor(Math.random()*255)
    const colorNumber2 = Math.floor(Math.random()*255)
    const colorNumber3 = Math.floor(Math.random()*255)

    const fillingBarColor = `${props.isPlaying ? `rgb(${colorNumber1}, ${colorNumber2}, ${colorNumber3})` : 'white'}`
   
   

  return (
    <div style={{display: props.display}} className={classes.mainContainer}>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
      <div className={classes.bar} style={{borderColor: fillingBarColor}}>
        <div style={{height: `${props.isPlaying ? Math.floor(Math.random()*100): '0'}%`, backgroundColor:fillingBarColor}} className={classes.fillingBar}></div>
      </div>
    </div>
  );
}
