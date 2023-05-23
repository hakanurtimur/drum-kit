import snare from "../../sounds/snare.wav";
import rimshotBasic from "../../sounds/rimshot-basic.wav";
import drew from "../../sounds/drew.wav";
import clap from "../../sounds/clap.wav";
import crash from "../../sounds/crash.wav";
import danceHallKick from "../../sounds/danceHallKick.wav";
import hihat from "../../sounds/hihat.wav";
import hihat2 from "../../sounds/hihat2.wav";
import kick from "../../sounds/kick.wav";
import percussionDry from "../../sounds/percussionDry.wav";
import percussionWet from "../../sounds/percussionWet.wav";
import ride from "../../sounds/ride.wav";
import tonalSnare from "../../sounds/tonalSnare.wav";



const Audio = () => {
  return (
    <>
      <audio id="q" src={rimshotBasic} />
      <audio id="w" src={snare} />
      <audio id="e" src={drew} />
      <audio id='r' src={clap} />
      <audio id="t" src={crash} />
      <audio id="y" src={danceHallKick} />
      <audio id="u" src={hihat} />
      <audio id="a" src={hihat2} />
      <audio id="s" src={kick} />
      <audio id="d" src={percussionDry} />
      <audio id="f" src={percussionWet} />
      <audio id="g" src={ride} />
      <audio id="h" src={tonalSnare} />
    </>
  );
};
export const keyArray = [
  {id:'q', item:'q', sound:'Rimshot'},
  {id:'w', item:'w', sound:'Snare'},
  {id:'e', item:'e', sound:'Drew'},
  {id:'r', item:'r', sound:'Clap'},
  {id:'t', item:'t', sound:'Crash'},
  {id:'y', item:'y', sound:'Kick (DanceHall)'},
  {id:'u', item:'u', sound:'Hihat'},
  {id:'a', item:'a', sound:'Hihat 2'},
  {id:'s', item:'s', sound:'Kick'},
  {id:'d', item:'d', sound:'Dry Percussion'},
  {id:'f', item:'f', sound:'Wet Percussion'},
  {id:'g', item:'g', sound:'Ride'},
  {id:'h', item:'h', sound:'Tonal Snare'},
]
export default Audio;
