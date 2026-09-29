import sys,json
from faster_whisper import WhisperModel
m=WhisperModel("small.en",device="cpu",compute_type="int8")
for f in sys.argv[1:]:
    segs,_=m.transcribe(f,vad_filter=True,beam_size=1)
    out=[{"s":round(s.start,1),"e":round(s.end,1),"t":s.text.strip()} for s in segs]
    json.dump(out,open(f.rsplit('.',1)[0]+'.json','w'))
    open(f.rsplit('.',1)[0]+'.txt','w').write("\n".join(f"[{o['s']:.0f}] {o['t']}" for o in out))
    print(f,len(out),flush=True)
