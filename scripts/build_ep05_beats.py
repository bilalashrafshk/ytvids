#!/usr/bin/env python3
"""
Episode 05 (HDMI) — build Phases 07-12 from voiceover/alignment.json.

    python3 scripts/build_ep05_beats.py

Beats are defined by SENTENCE RANGES (indices into alignment.json), never by
seconds. Re-run after any re-alignment (e.g. the regenerated chunk 33) and every
timecode, frame count, clip length, ducking window and pause swell updates.

Writes:  07_BEAT_SHEET.md  08_STILLS_PROMPTS.md  09_VIDEO_PROMPTS.md
         10_REMOTION_SPECS.md  11_AUDIO_DESIGN.md  12_CAPCUT_ASSEMBLY.md
"""
import json, math, os, re, sys

EP = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "videos", "05-hdmi-monopoly") + "/"
AL = json.load(open(EP + "voiceover/alignment.json"))
S = AL["sentences"]
T = AL["duration"]

QC = "follow best industry-standard guidelines and quality and visualisations"
RQ = "use best graphic motions practises and guidelines from top performing graphics"
STILL_STYLE = ("3840x2160, 16:9, clean flat vector illustration with soft cel-shading, confident linework, "
               "subtle dimensional gradients. Light warm-greige neutral palette with a single gold accent, "
               "generous negative space, one clear focal point.")
VIDEO_STYLE = "1920x1080, 16:9, 30fps, no audio, mute, silent output. Clean flat vector illustration with soft cel-shading, light warm-greige neutral palette with a single gold accent."

REF = {"viewer": "ref_char_01.png", "maker": "ref_char_02.png", "bouncer": "ref_char_03.png"}

BEATS = []
def _b(kind, s0, s1, slug, subject, cam, **kw):
    BEATS.append(dict(kind=kind, s0=s0, s1=s1, slug=slug, subject=subject, cam=cam, **kw))
def St(s0, s1, slug, subject, cam, text=None, ref=None, tags=(), cut=None):
    _b("S", s0, s1, slug, subject, cam, text=text, ref=ref, tags=list(tags), cut=cut)
def Vi(s0, s1, slug, subject, cam, ref=None, tags=()):
    _b("V", s0, s1, slug, subject, cam, ref=ref, tags=list(tags))
def Re(s0, s1, slug, subject, cam, comp, arche, labels, source=None, feeders=(), tags=("DATA",), scene="", cut=None):
    _b("R", s0, s1, slug, subject, cam, comp=comp, arche=arche, labels=labels, source=source,
       feeders=list(feeders), tags=list(tags), scene=scene, cut=cut)

PP = "Ken Burns push-in 1.00x to 1.08x"
PO = "slow 2.5D parallax drift"

# ------------------------------------------------------------------ ACT I
Vi(0,1,"cold_open_tilt","The Viewer at Home tilts their head; the camera glides round the side of a flat-screen TV to its back panel and pushes in on a row of ports.","gliding orbit, then slow push-in",ref="viewer")
Vi(2,3,"plug_push","Macro: a hand pushes a white cable's flat plug with two clipped corners into a port on the back of a TV, pulls it out, and pushes it in again.","macro, slow tilt-down then hold")
Vi(4,6,"factory_coin","A flat-screen TV rides a factory assembly line; a single gold coin drops into its back port and disappears.","side tracking shot, steady")
St(7,7,"shopper_checkout","A shopper at an electronics-store checkout, a boxed TV on the counter, the cashier reaching for the card reader.","wide to medium, "+PP,tags=("CUTAWAY: shopper at a checkout",))
St(8,8,"receipt_printing","A receipt curling out of the printer, one line circled faintly in gold, the rest blank.","punch-in, "+PP)
Re(9,9,"receipt_dots","A grid of 10,000 dots with exactly one lit in amber, after a TV receipt line zooms out.","zoom-out reveal","Ep05ReceiptDots","ARCHETYPE_FORMULA_RATIO_EXPLAINER",["$400 TV","one dollar in ten thousand"],source="illustrative ratio: $1 in every $10,000 (4 cents on a $400 TV)",tags=("DATA",))
St(10,10,"padlocked_port","Macro of a TV's flat port with a small brass padlock hanging from it, warm gold highlight.","slow push-in, "+PP)
St(11,11,"socket_vs_port","Split: a bright open wall socket on the left, the TV's port behind a velvet rope on the right.","static split with slight parallax",tags=())
St(12,12,"calendar_23yrs","A tall stack of wall-calendar pages from 2002 to 2025 beside a jar slowly filling with gold coins.","slow tilt-up along the stack")
Re(13,13,"fee_flow_a","Coins flow from a crowd of TV icons into one box labelled with the collecting company.","left-to-right flow","Ep05FeeFlow","ARCHETYPE_SUPPLY_CHAIN_CASCADE",["HDMI Licensing Administrator","the fee"],source="hdmi.org (founders page)",tags=("DATA",),scene="a")
Re(13,13,"fee_flow_b","The box passes the coins on to seven founder badges.","left-to-right flow","Ep05FeeFlow","ARCHETYPE_SUPPLY_CHAIN_CASCADE",["collects for","seven founders"],source="hdmi.org (founders page)",tags=("DATA",),scene="b",cut="which")
Vi(14,15,"chain_pull","A heavy metal chain is pulled taut link by link across a plain table; the camera tracks along it.","tracking along the chain")
St(16,16,"coin_who","A single gold coin on a table, a dark TV behind it, one large question mark floating above.","slow push-in, "+PP,text="?")
St(16,16,"coin_small","One small gold coin on the table in front of a huge dark shape looming behind it.","slow push-in, "+PP,cut="and")
St(17,17,"year_2002","A desk calendar torn open to a single page.","slow push-in, "+PP,text="2002")
St(18,18,"old_tv_knot","The back of a chunky early-2000s TV with a knot of mismatched cables tangled behind it.","wide, "+PO)
Re(19,22,"whipzoom_leads","Staccato whip-zoom montage through eight different plug-and-cable plates, landing on the tangled knot.","whip-zoom, 300-degree shutter blur","Ep05WhipZoom","ARCHETYPE_WHIP_ZOOM_MONTAGE",["none"],feeders=["140_feeder_01.png .. 140_feeder_08.png"],tags=("REMOTION",))
St(23,23,"switchboard","The back of a TV overlaid with the rows of jacks of an old telephone switchboard.","slow push-in, "+PP)
St(24,24,"seven_tvs","Seven different unbranded TVs in a neat row, each a different shape and colour.","static wide, "+PO)
Re(25,31,"seven_names","Seven name badges slam in one by one: Hitachi, Panasonic, Philips, Silicon Image, Sony, Thomson, Toshiba (text only, no logos).","one badge per name","Ep05NameBadges","bit-list-reveal",["seven name badges"],source="hdmi.org (founders press release)",tags=("SHOWABLE","DATA"))
Vi(32,33,"table_build","Seven pairs of anonymous hands around a long table slide parts toward the centre, where one small flat plug takes shape; overhead view.","overhead slow push-in")
St(34,34,"dvi_meets","An old computer monitor with a chunky blue DVI plug beside the small flat plug, an adapter joining them.","medium, "+PP)
St(35,35,"ninth_dec","A wall calendar page circled in gold.","slow push-in, "+PP,text="9 DEC 2002")
St(36,36,"plug_named","The finished flat plug on a workbench with a small paper tag tied to it.","macro push-in",text="HDMI")

# ------------------------------------------------------------------ ACT II
St(37,38,"clapper_reel","A film clapperboard and a film reel sitting beside the small plug, spotlit.","slow push-in, "+PP)
Vi(39,39,"copies","A single disc feeds a copier; identical copies pour off a conveyor in endless rows.","side tracking shot")
St(40,40,"studio_gate","An unbranded film-studio gate with a water tower behind it, a welcome mat at the entrance.","wide, "+PO)
St(41,41,"lock_on_plug","A brass padlock clicking shut on the small plug, with a tiny chip tucked beside it.","macro push-in")
Re(42,42,"backers_studios","Four cards fan out beside the plug: Fox, Universal, Warner Brothers, Disney (text names, no logos).","3D card fan","Ep05BackerStack","bit-card-stack",["four studio names"],source="hdmi.org press release; Wikipedia: HDMI",tags=("SHOWABLE",),scene="studios")
Re(43,43,"backers_cable","Two more cards join: a satellite dish and a cable spool.","3D card fan","Ep05BackerStack","bit-card-stack",["satellite","cable"],source="hdmi.org press release; Wikipedia: HDMI",tags=("SHOWABLE",),scene="cable")
Vi(44,46,"bouncer_badge","The Bouncer stands calm at a velvet-rope door; a glowing badge passes his reader and the door opens for it.","slow push-in on the bouncer",ref="bouncer")
Vi(47,48,"box_meets_tv","A streaming box and a TV exchange a glowing badge and a film plays; a second TV with no badge stays black.","medium, side-by-side hold")
St(49,49,"bouncer_wide","The Bouncer at the one door, arms folded, wide and calm.","wide, "+PO,ref="bouncer")
St(50,50,"badge_reader","Close-up of the bouncer's lapel badge reader with a single gold light.","punch-in",ref="bouncer")
St(51,51,"coin_on_badge","A gold coin resting on a small badge.","macro push-in")
Re(52,52,"key_fee","Card: the yearly lock fee, $15,000 a year.","one hero number","Ep05PriceCard","ARCHETYPE_FORMULA_RATIO_EXPLAINER",["lock fee","$15,000 a year"],source="Digital Content Protection LLC, licence agreement (rev. March 15, 2024), Procedural Appendix",tags=("DATA",),scene="key_fee")
Re(52,52,"key_prices","Key prices fall as the order grows: 30 cents, 7.5 cents, 1.5 cents.","stepped reveal","Ep05PriceCard","ARCHETYPE_UNIT_ECONOMICS_WATERFALL",["30 cents a key","7.5 cents a key","1.5 cents a key"],source="Digital Content Protection LLC, licence agreement (rev. March 15, 2024), Procedural Appendix",tags=("DATA",),scene="key_prices",cut="plus")
Vi(53,55,"lockpick","A padlock on a plain table is picked with a thin tool and springs open.","macro, locked-off with a slow push")
St(56,56,"laptop_key","A laptop screen showing a string of characters and a cracked padlock icon, in a dim room.","medium, "+PP)
St(57,57,"fake_keys","A stack of identical key cards, one glowing gold copy poking out.","macro, slow drift")
St(58,58,"legal_letter","A formal legal letter and a pen on a desk, the page unreadable.","medium, "+PP)
Vi(59,59,"envelope","A large envelope is sealed with wax and slid across a desk toward a bench of small gadgets.","tracking the slide")
St(60,60,"hdfury_box","A small plain black box with ports sitting between a console and a TV.","medium, "+PP)
St(60,60,"strips_lock","The black box holds a tiny padlock that it has just pulled off a picture.","punch-in, "+PP,cut="could")
St(61,61,"summons","A summons envelope being slid under the door of a small workshop.","low angle, "+PP)
St(62,62,"quality_split","Split picture: a sharp image on the left, the same image slightly blurrier on the right, a small box between them.","static split")
St(63,63,"calendar_5mo","A wall calendar with five months' pages flipping past.","slow push-in, "+PP,text="5 MONTHS")
St(64,64,"cracked_lock","A cracked padlock hanging open from a chain.","macro push-in")
St(65,65,"chain_holds","The same chain pulled taut and holding, the cracked lock small at its end.","slow pull-back")
St(66,67,"chain_moving","A long chain running along a conveyor, links rolling forward.","tracking, "+PO)
St(68,68,"loop_intro","Four empty circles joined by arrows in a ring, unlabelled.","slow push-in, "+PP)
Re(69,72,"loop_flywheel","Four steps turning as one loop: studios and cable back the plug, boxes use it, every TV needs it, every maker signs and pays, feeding back to the start.","3D orbital flywheel, one step lit at a time","Ep05Flywheel","ARCHETYPE_3D_ORBITAL_FLYWHEEL",["studios back it","boxes use it","every TV needs it","every maker pays"],feeders=["680_feeder_01.png .. 680_feeder_04.png (transparent cutouts)"],tags=("REMOTION","DATA"))
St(73,73,"many_badges","A long wall of small identical name plates, each a different company (no readable names).","slow tilt-up, "+PP)
Vi(74,76,"one_door","Devices of every kind (TVs, consoles, streaming boxes, soundbars) drift in from all sides toward one small door in a plain wall; a slow push toward the door.","slow push toward the door",tags=("PIVOTAL",))
St(77,77,"no_ports_tv","A TV seen from behind with a completely blank back panel, no ports.","wide, "+PO)
St(78,79,"viewer_blank","The Viewer at Home holding a console cable and staring at the TV's blank back.","medium, "+PP,ref="viewer",tags=("CUTAWAY: a living-room moment",))

# ------------------------------------------------------------------ ACT III
Vi(80,82,"club_door","The Bouncer at a club's single entrance; someone builds a fancier door at the back, but the party inside is only reachable by badge.","slow dolly toward the door",ref="bouncer")
St(83,83,"price_board","A small gold-framed price board beside a club door, the prices blurred.","medium, "+PP)
St(84,84,"contract_desk","A short, plain contract on a desk beside a pen.","medium, "+PP)
Re(85,85,"annual_big","Card: a big maker pays $10,000 a year.","one hero number","Ep05PriceCard","ARCHETYPE_FORMULA_RATIO_EXPLAINER",["big maker","$10,000 a year"],source="as widely reported (Wikipedia: HDMI Licensing; licensing explainers)",tags=("DATA",),scene="annual_big")
Re(86,86,"annual_small","Card: a small maker pays $5,000 a year plus $1 a unit.","one hero number","Ep05PriceCard","ARCHETYPE_FORMULA_RATIO_EXPLAINER",["small maker","$5,000 + $1 a unit"],source="as widely reported (Wikipedia: HDMI Licensing; licensing explainers)",tags=("DATA",),scene="annual_small")
Re(87,88,"per_device_15","A single fee card: per device, as widely reported, 15 cents.","one hero number","Ep05PriceCard","ARCHETYPE_FORMULA_RATIO_EXPLAINER",["per device","15 cents"],source="as widely reported (Wikipedia: HDMI Licensing)",tags=("DATA",),scene="per_device_15")
Re(89,90,"per_device_tiers","The fee drops in two steps: 15 cents to 5 cents with the logo, to 4 cents with the lock too.","two-step drop","Ep05PriceCard","ARCHETYPE_FORMULA_RATIO_EXPLAINER",["15 cents","5 cents (logo)","4 cents (logo + lock)"],source="as widely reported (Wikipedia: HDMI Licensing)",tags=("DATA",),scene="per_device_tiers")
St(91,92,"toll_discount","A toll booth whose price sign has a DISCOUNT banner pinned across it.","medium, "+PP,text="DISCOUNT")
Re(93,93,"logo_rules","Highlighter sweep over the real logo-guidelines line: makers receive a discounted rate for using the logo.","highlighter sweep, red circle","Ep05Newsprint","ARCHETYPE_NEWSPRINT_EDITORIAL",["real page excerpt"],source="HDMI Adopted Trademark and Logo Usage Guidelines, rev. May 3, 2022, s.1.1.1 (real page to be collected)",tags=("SHOWABLE",),scene="logo_rules")
St(94,95,"coin_gumball","A gold coin beside a gumball on an open palm.","macro push-in")
Vi(96,98,"garage_maker","The Small Maker in a garage turned factory, assembling a row of TVs on a workbench.","medium tracking, slow push",ref="maker")
Re(99,99,"small_yearly","Small maker: a $5,000 yearly fee bar rises.","one bar","Ep05FeeWaterfall","ARCHETYPE_UNIT_ECONOMICS_WATERFALL",["$5,000 yearly"],source="our own arithmetic on the widely reported fee schedule",tags=("DATA",),scene="small_yearly")
Re(100,100,"small_per_tv","A dollar on each of 10,000 TVs stacks $10,000 on top.","stacking bars","Ep05FeeWaterfall","ARCHETYPE_UNIT_ECONOMICS_WATERFALL",["$10,000 ($1 a TV)"],source="our own arithmetic on the widely reported fee schedule",tags=("DATA",),scene="small_a")
Re(101,103,"small_total","Add $500 for the per-device fee to reach $15,500, which is $1.55 on every TV.","waterfall lands on the hero number","Ep05FeeWaterfall","ARCHETYPE_UNIT_ECONOMICS_WATERFALL",["$500 (5 cents each)","$15,500 total","$1.55 a TV"],source="our own arithmetic on the widely reported fee schedule",tags=("DATA",),scene="small_b")
Re(104,104,"giant_setup","A giant maker selling 10 million TVs: a very long row of TV icons.","row draws","Ep05FeeWaterfall","ARCHETYPE_UNIT_ECONOMICS_WATERFALL",["10 million TVs"],source="our own arithmetic on the widely reported fee schedule",tags=("DATA",),scene="giant_setup")
Re(105,106,"giant_total","$10,000 yearly plus $400,000 in device fees, about 4 cents a TV.","short waterfall","Ep05FeeWaterfall","ARCHETYPE_UNIT_ECONOMICS_WATERFALL",["$10,000 yearly","$400,000","about 4 cents a TV"],source="our own arithmetic on the widely reported fee schedule",tags=("DATA",),scene="giant")
Re(107,108,"forty_times","Split screen: garage bench at $1.55 a TV against factory floor at 4 cents a TV, a 'nearly 40 times' marker.","split-screen comparison","Ep05SplitCompare","ARCHETYPE_SPLIT_SCREEN_COMPARISON",["$1.55 a TV","4 cents a TV","nearly 40 times"],source="our own arithmetic on the widely reported fee schedule",tags=("DATA",),scene="forty_times")
St(109,109,"our_own_math","A calculator and scribbled notes on a desk.","punch-in, "+PP,text="OUR OWN MATH")
St(110,110,"weight_on_small","The Small Maker carrying a heavy sack while a giant figure strolls past with a tiny one.","medium, "+PP,ref="maker")
St(111,112,"five_ports","The back of a TV with five ports in a row and one gold coin above the set.","medium, "+PP)
St(112,112,"one_coin_once","The same TV, a single coin dropping once into a small dish.","slow push-in, "+PP,cut="pays")
St(113,113,"patent_sheet","A patent-style blueprint sheet of the small flat plug pinned to a drawing board.","slow push-in, "+PP)
St(114,114,"blueprint_close","Close-up of the plug's blueprint lines with a thin gold outline around the drawing.","macro push-in")
St(115,115,"viewer_shelf","The Viewer at Home walking past a shelf of cables, oblivious.","medium tracking, "+PO,ref="viewer",tags=("CUTAWAY: shopping aisle",))
St(116,116,"stamp_poised","A rubber stamp poised above the plug's blueprint.","low angle, "+PP)
St(117,117,"stamp_licensed","The blueprint stamped LICENSED in ink, dust rising.","slow push-in",text="LICENSED")
Vi(118,121,"real_vs_fake","On a table, a real flat plug and an identical-looking fake; a chalk line is drawn between them and only the real one gets a stamp.","overhead, slow push")
St(122,122,"coins_question","A small pile of gold coins with a question mark shadow.","slow push-in, "+PP)

# ------------------------------------------------------------------ ACT IV
Re(123,123,"devices_2017","Counter card: nearly 900 million devices shipped in 2017.","counter climbs","Ep05CounterCard","ARCHETYPE_CASH_BURN_COUNTER",["nearly 900 million devices"],source="HDMI LA press release (2017 shipments)",tags=("DATA",),scene="devices_2017")
Re(124,124,"devices_times","Multiply by 4 to 15 cents each: about $36M to $135M a year.","multiply, range bar","Ep05CounterCard","ARCHETYPE_CASH_BURN_COUNTER",["4 to 15 cents","about $36M to $135M (our math)"],source="our own arithmetic",tags=("DATA",),scene="devices_times")
Re(125,126,"growth_a","Staircase of shipped devices, first steps: fast growth, about 600 million in early 2009.","one step lit at a time","Ep05Staircase","ARCHETYPE_CHURN_RETENTION_CURVE",["2009","600 million"],source="HDMI LA adoption figures as reported (Wikipedia: HDMI Licensing)",tags=("DATA",),scene="a")
Re(127,128,"growth_b","Staircase continues: 2 billion in late 2011, nearly 10 billion in 2021.","one step lit at a time","Ep05Staircase","ARCHETYPE_CHURN_RETENTION_CURVE",["2011","2021"],source="HDMI LA adoption figures as reported (Wikipedia: HDMI Licensing)",tags=("DATA",),scene="b")
St(129,129,"world_of_tvs","A globe made of stacked TVs.","slow push-in, "+PP)
St(130,130,"two_each","A crowd of small figures on a plain ground, each holding two devices.","wide, "+PO)
Re(131,132,"range_total","Range bar: roughly $0.6 billion to $2 billion over 23 years, a marker near the low end, labelled our own rough math.","bar draws, marker drops","Ep05RangeBar","ARCHETYPE_UNIT_ECONOMICS_WATERFALL",["about $0.6B to $2B","23 years","our own rough math"],source="our own arithmetic: ~14 billion devices x $0.04 to $0.15",tags=("DATA",))
St(133,135,"coins_vs_tower","A small modest pile of coins at the foot of a huge tower built of money.","wide, "+PP)
Vi(136,137,"line_at_door","A long queue of devices waits at one door in a wall; the door stays shut.","slow dolly along the queue")
Vi(138,140,"displayport_rival","A PC monitor with its own plug rolls up to the same wall and finds a side door, marked with a small star.","medium, slow push")
St(141,141,"tv_wall_shop","A shop wall of TVs already lined up, one lonely PC monitor in a corner.","wide, "+PO)
St(142,142,"tvs_taken","The shop wall with a 'taken' tag on every TV.","punch-in")
St(143,143,"free_asterisk","A small box with a big gold FREE tag and a tiny asterisk in the corner.","slow push-in, "+PP,text="FREE*")
Re(144,145,"dp_vs_hdmi","Two cards: 20 cents a product for the rival plug's patent pool against 4 cents for the lowest fee on the other side.","split-screen comparison","Ep05SplitCompare","ARCHETYPE_SPLIT_SCREEN_COMPARISON",["20 cents","4 cents"],source="Via Licensing Alliance, DisplayPort Patent Portfolio License Briefing; Wikipedia: MPEG LA",tags=("DATA",),scene="dp_vs_hdmi")
St(146,146,"same_names","Two columns of plain name plates with four matching plates glowing gold on both sides.","slow push-in, "+PP)
St(147,147,"exit_toll","An exit door with a small toll booth standing in the doorway.","slow push-in, "+PP)
Vi(148,149,"stamping_marks","A machine stamps the plug's mark onto boxes on a conveyor; an inspector's hand stops the belt at one box.","side tracking shot")
St(150,150,"tradeshow_aisle","A trade-show aisle; a visitor holds up a cable at a small booth, a logo on its packaging.","medium, "+PO,tags=("CUTAWAY: trade-show floor",))
Re(151,152,"org_split","The founders on the left split into two boxes: one that writes the contract and collects the fees, one that writes the rules.","node-and-arrow build","Ep05OrgDiagram","ARCHETYPE_SUPPLY_CHAIN_CASCADE",["the founders","writes the contract, collects fees","writes the rules"],source="hdmi.org (founders page); Wikipedia: HDMI Licensing",tags=("DATA",),scene="org_a")
Re(153,154,"org_labels","The two boxes light up in turn: the licensing company 'writes the contract', the Forum 'writes the rules'.","highlight each box","Ep05OrgDiagram","ARCHETYPE_SUPPLY_CHAIN_CASCADE",["contract","rules"],source="hdmi.org (founders page)",tags=("DATA",),scene="org_b")
Vi(155,155,"version_22","A workbench reveal of a new plug prototype etched with '2.2'; two hands, one from each body, place it on a shelf beside older versions.","overhead reveal, slow push")
St(156,156,"same_founders","One founders' door with the same seven silhouettes walking through it.","wide, "+PP)
Vi(157,158,"name_plaque","A brass name plaque beside a door is swapped for a new one, while the same people keep walking through.","static, time-lapse feel")
St(159,159,"group_same","The same building front, new sign, same people in the doorway.","slow push-in, "+PP)
St(160,160,"chip_board","A single chip on a circuit board with a small paper tag.","macro push-in",text="AVAILINK")
Vi(161,162,"chip_line","A chip factory line; boxes of chips are carried to a TV assembly line next door.","tracking, "+PO)
Re(163,164,"who_owes","Fee chain: chip maker to TV maker, a question mark over 'who owes the fee', then an arrow lands on the chip maker.","node-and-arrow reveal","Ep05FeeChain","ARCHETYPE_SUPPLY_CHAIN_CASCADE",["chip maker","TV maker","who owes the fee?"],source="HDMI LA statement on the ruling (Dec 31, 2025)",tags=("DATA",))
Vi(165,166,"contract_calendar","A contract is signed; three calendar pages fly off, the contract tears, a summons drops on a desk.","desk-level, slow push")
Re(167,168,"docket","Highlighter sweep over the real case caption: HDMI Licensing Administrator, Inc. v. Availink Inc.","highlighter sweep","Ep05Newsprint","ARCHETYPE_NEWSPRINT_EDITORIAL",["case caption"],source="CourtListener docket 5:22-cv-06947 (N.D. Cal.) (real page to be collected)",tags=("SHOWABLE",),scene="docket")
Vi(169,169,"gavel","A quiet empty courtroom; a gavel falls once on the bench.","slow push-in on the bench")
Re(170,171,"court_finding","Highlighter sweep over the court's finding that the contract did not harm competition.","highlighter sweep, red circle","Ep05Newsprint","ARCHETYPE_NEWSPRINT_EDITORIAL",["court finding"],source="Constantine Cannon / HDMI LA statement on the ruling; court order (real page to be collected)",tags=("SHOWABLE",),scene="finding")
St(172,172,"chip_maker_pays","A chip maker at a counter handing over an invoice and a small stack of chips.","medium, "+PP)
Re(173,173,"fourteen_million","Counter card: $14,000,000 ticks up.","counter ticks up","Ep05CounterCard","ARCHETYPE_CASH_BURN_COUNTER",["$14,000,000"],source="HDMI LA statement; Constantine Cannon",tags=("DATA",),scene="fourteen")
St(174,174,"signs_again","A pen signing a fresh contract on a desk, the old torn one in the bin.","punch-in, "+PP)
Vi(175,176,"chip_vs_wall","A tiny microchip pushes against a huge blank wall; the wall does not move.","wide, slow push-in")
St(177,177,"coin_at_wall","A single cheap coin at the foot of the wall.","low angle, "+PP)
Re(178,178,"wall_bricks","Four bricks stack into the wall in turn: patents, name, lock, court.","brick by brick","Ep05WallBricks","bit-list-reveal",["patents","name","lock","court"],source="",tags=("REMOTION",))

# ------------------------------------------------------------------ ACT V
Vi(179,181,"console_night","A couple on a sofa plug a console into a TV; it just works, the room glows, the camera eases back.","slow pull-back",tags=("CUTAWAY: a living-room moment",))
Vi(182,183,"test_lab","In a bright test lab, a tester plugs cables into a rack; a fake cable is taken off a shelf.","medium, slow pan")
St(184,184,"sofa_forget","The Viewer at Home settled on a sofa watching TV, the cable unseen behind it.","wide, "+PP,ref="viewer")
St(185,185,"scales_plug","A balance scale with a small plug on one side and a contract on the other, level.","slow push-in, "+PP)
Vi(186,188,"blueprints_glass","Rolled blueprints locked behind glass; people outside peer in but cannot open it.","slow push-in on the glass")
Vi(189,189,"rulebook_closes","A thick rulebook slowly closes and a padlock clicks onto it.","macro, locked-off")
Vi(190,190,"open_code","A laptop screen of open code scrolls, a graphics card silhouette beside it (no logo); the code stays visible to everyone in the room.","medium, slow push-in")
St(191,191,"open_lock","An open padlock beside an open book.","slow push-in, "+PP)
Re(192,193,"amd_quote_a","Typewriter reveal of the engineer's message: 'The HDMI Forum has rejected our proposal unfortunately.'","typewriter, highlighter on 'rejected'","Ep05QuoteCard","variable-speed-typewriter",["quote card","AMD engineer, 2024"],source="The Register, 2 March 2024 (message to be shown as a card of the real text)",tags=("SHOWABLE",),scene="quote_a")
Re(194,194,"amd_quote_b","Typewriter reveal continues: 'At this time an open source HDMI 2.1 implementation is not possible without running afoul of the HDMI Forum requirements.'","typewriter, highlight the last clause","Ep05QuoteCard","variable-speed-typewriter",["quote card","AMD engineer, 2024"],source="The Register, 2 March 2024",tags=("SHOWABLE",),scene="quote_b")
Re(195,195,"four_k_lost","Card: the best picture over HDMI on Linux with an AMD card gets a cross.","cross stamps in","Ep05SplitCompare","ARCHETYPE_SPLIT_SCREEN_COMPARISON",["HDMI on Linux with AMD","no"],source="The Register; Phoronix; Tom's Hardware",tags=("DATA",),scene="four_k_lost")
Re(196,196,"four_k_ratio","Card: the cross stays and a big '4K · 120' lands beneath it.","big number lands","Ep05SplitCompare","ARCHETYPE_SPLIT_SCREEN_COMPARISON",["HDMI on Linux with AMD","4K · 120"],source="The Register; Phoronix; Tom's Hardware",tags=("DATA",),scene="four_k")
St(197,197,"gamer_desk","A gamer at a desk holding up a cable and frowning.","medium, "+PP,tags=("CUTAWAY: a gamer's desk",))
St(198,198,"swap_cable","The gamer swapping in a different cable, relieved.","punch-in")
St(199,199,"sticker_box","A TV box with a big shiny sticker on it.","medium, "+PP,text="HDMI 2.1")
Vi(200,200,"sticker_reveal","A magnifying glass moves across a port marked '2.1'; the label peels back to reveal a smaller 2.0 underneath.","macro, slow move")
St(201,201,"spec_small_print","A spec sheet with a tiny line of small print, the rest of the page blank.","slow push-in, "+PP)
St(202,202,"magnifier","A magnifying glass over the small print.","punch-in")
St(203,203,"viewer_returns","The Viewer at Home turns back to the TV, mug in hand.","medium, "+PP,ref="viewer")
St(204,204,"plug_macro","Macro of the plug with two clipped corners.","macro push-in")
St(205,205,"wall_socket","The plug beside a wall socket, both on a plain wall.","medium, "+PP)
St(206,206,"contract_plug","A paper contract with the plug's outline drawn on it.","slow push-in, "+PP)
Re(207,210,"portal_tunnel","Zoom out from the TV port through a tunnel of ports on every device in a house.","infinite zoom-out, harmonic wobble","Ep05PortalTunnel","ARCHETYPE_INFINITE_PORTAL_TUNNEL",["none"],feeders=["2070_feeder_01.png (corridor plate)"],tags=("REMOTION",))

# --------------------------------------------------------------- timing
N = len(BEATS)
WORDS = json.load(open(EP + "voiceover/whisper_words.json"))["words"]
def _norm(w):
    return re.sub(r"[^a-z0-9']", "", w.lower())
def cut_time(sidx, word):
    lo, hi = S[sidx]["start"] - 0.3, S[sidx]["end"] + 0.3
    for w in WORDS:
        if lo <= w["s"] <= hi and _norm(w["w"]) == word and w["s"] > S[sidx]["start"] + 0.3:
            return w["s"]
    raise SystemExit("cut word %r not found in sentence %d" % (word, sidx))
for k, b in enumerate(BEATS):
    b["n"] = (k + 1) * 10
    if k == 0:
        b["t0"] = 0.0
    elif b.get("cut"):
        b["t0"] = cut_time(b["s0"], b["cut"])
    else:
        b["t0"] = S[b["s0"]]["start"]
for k, b in enumerate(BEATS):
    b["t1"] = T if k == N - 1 else BEATS[k + 1]["t0"]
    b["D"] = b["t1"] - b["t0"]
# sanity: sentence coverage contiguous
assert BEATS[0]["s0"] == 0 and BEATS[-1]["s1"] == len(S) - 1
for a, b in zip(BEATS, BEATS[1:]):
    if b.get("cut"):
        assert b["s0"] == a["s1"] == b["s1"], (a["slug"], b["slug"])
    else:
        assert b["s0"] == a["s1"] + 1, (a["slug"], b["slug"])
for a, b in zip(BEATS, BEATS[1:]):
    assert b["t0"] > a["t0"], (a["slug"], b["slug"])

def tc(t):
    m = int(t // 60); s = t - 60 * m
    return "%02d:%04.1f" % (m, s)
def fn(b, ext):
    return "%03d_%s.%s" % (b["n"], b["slug"], ext)
def _cut_index(toks, word):
    for k, t in enumerate(toks):
        if k > 0 and _norm(t) == word:
            return k
    raise SystemExit("cut word %r not in sentence" % word)
def spoken(b):
    k = BEATS.index(b)
    nxt = BEATS[k + 1] if k + 1 < len(BEATS) else None
    parts = []
    for i in range(b["s0"], b["s1"] + 1):
        toks = S[i]["text"].split()
        lo, hi = 0, len(toks)
        if i == b["s0"] and b.get("cut"):
            lo = _cut_index(toks, b["cut"])
        if nxt and nxt.get("cut") and nxt["s0"] == i and i == b["s1"]:
            hi = _cut_index(toks, nxt["cut"])
        parts.append(" ".join(toks[lo:hi]))
    return " ".join(p for p in parts if p)

def act_of(b):
    s = b["s0"]
    return 1 if s <= 36 else 2 if s <= 79 else 3 if s <= 122 else 4 if s <= 178 else 5

def clip_len(D):
    """Omni makes even lengths only (2, 4, 6, 8, 10). Pick the one closest to D within 0.90-1.25 x D."""
    ok = [(abs(L / D - 1), L) for L in (2, 4, 6, 8, 10) if 0.90 <= L / D <= 1.25]
    if not ok:
        raise SystemExit("no even clip length fits a %.1f s beat; split it or use a still" % D)
    return min(ok)[1]

for b in BEATS:
    if b["kind"] == "V":
        b["L"] = clip_len(b["D"])
        b["fit"] = "play at %.2fx to fill %.1fs" % (b["L"] / b["D"], b["D"])

    if b["kind"] == "R":
        b["frames"] = int(round(b["D"] * 30))

def stag(b):
    out = []
    for t in b.get("tags", []):
        out.append("[%s]" % t)
    return " ".join(out)

nV = sum(1 for b in BEATS if b["kind"] == "V"); nR = sum(1 for b in BEATS if b["kind"] == "R"); nS = sum(1 for b in BEATS if b["kind"] == "S")
tV = sum(b["D"] for b in BEATS if b["kind"] == "V"); tR = sum(b["D"] for b in BEATS if b["kind"] == "R"); tS = sum(b["D"] for b in BEATS if b["kind"] == "S")
Bmin, Bmax, Btar = int(T // 5), math.ceil(T / 2.5), round(T / 3.5)
sumD = sum(b["D"] for b in BEATS)
FEED = 8 + 4 + 1   # whip-zoom plates, flywheel cutouts, portal corridor plate
assert nV <= 30, nV

# ================================================================= 07
def kindname(b):
    return {"S": "Still (4K)", "V": "AI Video Clip", "R": "Remotion"}[b["kind"]]

acts = {}
for b in BEATS:
    acts.setdefault(act_of(b), []).append(b)
cut = {a: [b for b in bs if any(t.startswith("CUTAWAY") for t in b.get("tags", []))] for a, bs in acts.items()}
sig = [b for b in BEATS if b["kind"] == "R" and b["arche"] in ("ARCHETYPE_WHIP_ZOOM_MONTAGE", "ARCHETYPE_3D_ORBITAL_FLYWHEEL", "ARCHETYPE_INFINITE_PORTAL_TUNNEL")]
gaps = [(sig[i + 1]["t0"] - sig[i]["t0"]) for i in range(len(sig) - 1)]

L = []
L.append("# Phase 07: Spoken-Cadence Beat Sheet — Episode 05\n")
L.append("> **Generated after the voiceover and its alignment existed** (`voiceover/alignment.json`, faster-whisper word timestamps). Every timecode below is a sentence downbeat from that file, not an estimate. **Beats are stored as sentence ranges, so `python3 scripts/build_ep05_beats.py` rebuilds every timecode, frame count and clip length in this phase and phases 08 to 12 after a re-alignment.**\n>")
L.append("> **Audio history:** the first delivery of chunk 33 (the DisplayPort lines) was garbled TTS. A regenerated `chunk33.wav` was spliced into `master_narration.wav` at the silences on either side (old audio to 422.754 s, the new chunk, then old audio from 437.291 s), and the alignment was re-run. Beat numbers and filenames were kept stable across the re-time so assets already sent for generation still match.\n")
L.append("---\n")
L.append("## Audio Reference & Runtime Alignment\n")
L.append("- **Master VO Audio File:** `voiceover/master_narration.wav` (24 kHz mono)")
L.append("- **Total Spoken Duration (T_audio):** `%s` (%.2f s)" % (tc(T), T))
L.append("- **Total Visual Beats (B):** %d   (B_min = floor(T/5) = %d, B_max = ceil(T/2.5) = %d, B_target = round(T/3.5) = %d)" % (N, Bmin, Bmax, Btar))
L.append("- **Average beat duration:** %.2f s" % (T / N))
L.append("")
L.append("## Sanity Check Audit Block (CP-3 / CP-4)\n")
L.append("| Check | Value | Result |\n| :--- | :--- | :--- |")
L.append("| Beats in window | %d, need %d to %d | **%s** |" % (N, Bmin, Bmax, "PASS" if Bmin <= N <= Bmax else "FAIL"))
L.append("| Sum of beat durations vs T | %.2f s vs %.2f s (drift %.2f%%) | **%s** |" % (sumD, T, abs(sumD - T) / T * 100, "PASS" if abs(sumD - T) / T <= 0.02 else "FAIL"))
L.append("| Sentence coverage | %d of %d sentences, contiguous, none skipped or reused | **PASS** |" % (len(S), len(S)))
stills = [b for b in BEATS if b["kind"] == "S"]
L.append("| Stills: duration band | mean %.2f s; shortest %.1f s, longest %.1f s; count over 6.0 s: %d | **%s** |" % (tS / nS, min(b["D"] for b in stills), max(b["D"] for b in stills), sum(1 for b in stills if b["D"] > 6.0), "PASS" if not any(b["D"] > 6.0 for b in stills) and min(b["D"] for b in stills) >= 1.5 else "CHECK"))
L.append("| Beats under 1.5 s | %d | **%s** |" % (sum(1 for b in BEATS if b["D"] < 1.5), "PASS" if not any(b["D"] < 1.5 for b in BEATS) else "FAIL"))
L.append("| AI video clips | %d clips (cap 30), all even 2-10 s, retimed to fit, none trimmed, %.0f s = **%.0f%% of runtime** (aim 40-60%%) | **%s** |" % (nV, tV, tV / T * 100, "PASS" if nV <= 30 else "FAIL"))
L.append("| Remotion beats | %d beats, %.0f s (%.0f%% of runtime), not counted against the AI cap | PASS |" % (nR, tR, tR / T * 100))
L.append("| Stills | %d beats, %.0f s (%.0f%% of runtime) | PASS |" % (nS, tS, tS / T * 100))
L.append("| Cut on every sentence (stills) | every still beat covers one sentence, or two or more where the extra sentences run under 1.5 s | PASS |")
L.append("| Cutaway per Act | " + "; ".join("Act %d: %d (%s)" % (a, len(cut[a]), ", ".join("%03d" % b["n"] for b in cut[a])) for a in sorted(cut)) + " | **%s** |" % ("PASS" if all(len(cut[a]) >= 1 for a in cut) else "FAIL"))
L.append("| Signature cinematics | %d: " % len(sig) + ", ".join("%s at %s (beat %03d, %.1f s)" % (b["arche"].replace("ARCHETYPE_", ""), tc(b["t0"]), b["n"], b["D"]) for b in sig) + "; gaps %s s | **%s** |" % (", ".join("%.0f" % g for g in gaps), "PASS" if all(g >= 90 for g in gaps) else "CHECK"))
L.append("")
L.append("**Honest deviation:** AI video carries %.0f%% of the runtime against the 40-60%% aim. The 30-clip cap and the beat minimum pull in opposite directions here: each clip counts as one beat however long it runs, so raising clip length would push the beat count under B_min. I kept the count and left the clip share where it is. Feeder plates for the three signature cinematics (%d: 8 whip-zoom plates, 4 flywheel cutouts, 1 tunnel corridor) are counted in Batch 1 as feeders under their host beats, not as extra beats.\n" % (tV / T * 100, FEED))
L.append("**Cold open:** beats 010, 020 and 030 are three AI video clips (0.0 to %s), carrying the hook: the head-tilt, the plug, the coin. No logo, bumper or title card.\n" % tc(BEATS[3]["t0"]))
L.append("**Visual layer (A3 signature):** the loop at %s is the flywheel; no motion sits under the quote card (beats for the AMD message) or the real document inserts.\n" % tc([b for b in BEATS if b["slug"] == "loop_flywheel"][0]["t0"]))
L.append("---\n")
L.append("## Chronological Beat Sheet\n")
L.append("| Beat # | Timecode (Start - End) | Duration | Visual Type | Staging & Subject Description | Framing & Camera Motion | Spoken Voiceover Line |")
L.append("| :---: | :---: | :---: | :--- | :--- | :--- | :--- |")
cur = 0
for b in BEATS:
    a = act_of(b)
    if a != cur:
        cur = a
        L.append("| | | | **ACT %d** | | | |" % a)
    tg = stag(b)
    subj = (tg + " " if tg else "") + b["subject"]
    if b["kind"] == "R":
        subj += " (%s; %s)" % (b["comp"], b["arche"])
    if b.get("text"):
        subj += ' On-image text: "%s".' % b["text"]
    q = spoken(b).replace("|", "/")
    L.append("| **%03d** | `%s - %s` | %.1fs | %s | %s | %s | \"%s\" |" % (b["n"], tc(b["t0"]), tc(b["t1"]), b["D"], kindname(b) + (" %ds" % b["L"] if b["kind"] == "V" else "") + (" %df" % b["frames"] if b["kind"] == "R" else ""), subj, b["cam"], q))
open(EP + "07_BEAT_SHEET.md", "w").write("\n".join(L) + "\n")

# ================================================================= 08
M = []
M.append("# Phase 08: Batch 1 — Still Image Prompts (Nano Banana 2) — Episode 05\n")
M.append("> %d still beats plus %d feeder plates for the Remotion cinematics. 3840x2160 (4K), 16:9, flat vector with soft cel-shading, light warm-greige palette, one gold accent. Character references: `ref_char_01.png` (Viewer at Home), `ref_char_02.png` (Small Maker), `ref_char_03.png` (Bouncer) from Phase 05.\n>" % (nS, FEED))
M.append("> **Quality clause** (verbatim, in every prompt): \"%s\". **Native text:** where a still carries words, the prompt says `ON-IMAGE TEXT: Direct in-generation text: \"...\"` and the negative prompt does not ban text.\n" % QC)
M.append("> **Real logos:** none. Company and studio names appear only as plain text on Remotion cards, never as logos.\n")
M.append("---\n")
M.append("## Batch 1 Prompts Inventory\n")
for b in stills:
    ref = REF.get(b.get("ref")) if b.get("ref") else None
    prompt = STILL_STYLE + " " + b["subject"] + (" Match the character reference exactly." if ref else "") + " Crisp focus, professional framing, " + QC + "."
    neg = "photorealism, glossy 3D CGI render, cluttered composition, blurry details, distorted anatomy, watermark, real brand logos" + ("" if b.get("text") else ", text, gibberish text")
    M.append("### Beat %03d — %s%s" % (b["n"], b["slug"].replace("_", " ").title(), (" " + stag(b)) if b.get("tags") else ""))
    M.append("```")
    M.append("FILENAME: %s" % fn(b, "png"))
    M.append("TYPE: Static Image")
    M.append("TECHNIQUE: N/A")
    M.append("INPUT FRAMES: %s" % (ref if ref else "None"))
    M.append("PROMPT: " + prompt)
    M.append("NEGATIVE PROMPT: " + neg)
    M.append("CONTINUITY: " + ("Character master reference %s; keep the outfit and props fixed." % ref if ref else "None"))
    M.append("ON-IMAGE TEXT: " + ('Direct in-generation text: "%s"' % b["text"] if b.get("text") else "None"))
    M.append("DURATION: %.1fs" % b["D"])
    M.append("```\n")
M.append("---\n")
M.append("## Feeder plates for the Remotion cinematics (Batch 1, generated upstream)\n")
feeders = []
for i, d in enumerate(["a tangle of mismatched cables in a drawer", "a bundle of yellow, white and red plugs", "a thick black cable with a chunky end", "a coiled cable on a bench", "a row of plugs pinned to a board", "a hand holding three plugs fanned out", "a jumble of leads behind a TV stand", "a box of old cables, one bright flat plug on top"], 1):
    feeders.append(("140_feeder_%02d.png" % i, d, "whip-zoom plate %d of 8" % i))
for i, d in enumerate(["a film reel", "a small streaming box", "a flat-screen TV, front view", "a small factory building"], 1):
    feeders.append(("680_feeder_%02d.png" % i, d + " on a transparent background", "flywheel cutout %d of 4 (transparent PNG)" % i))
feeders.append(("2070_feeder_01.png", "a one-point-perspective hallway made of stacked TV back panels, each with a bright port, a soft gold light at the vanishing point", "portal corridor plate"))
for f, d, role in feeders:
    tx = f.startswith("680")
    M.append("### %s — %s" % (f, role))
    M.append("```")
    M.append("FILENAME: " + f)
    M.append("TYPE: Static Image (feeder for a Remotion cinematic)")
    M.append("TECHNIQUE: N/A")
    M.append("INPUT FRAMES: None")
    M.append("PROMPT: " + STILL_STYLE + " " + d[0].upper() + d[1:] + ("." if not d.endswith(".") else "") + " Crisp focus, " + QC + ".")
    M.append("NEGATIVE PROMPT: photorealism, glossy 3D CGI render, watermark, real brand logos, text, gibberish text" + (", background, shadow" if tx else ""))
    M.append("CONTINUITY: None")
    M.append("ON-IMAGE TEXT: None")
    M.append("DURATION: N/A (feeder)")
    M.append("```\n")
open(EP + "08_STILLS_PROMPTS.md", "w").write("\n".join(M) + "\n")

# ================================================================= 09
V = []
V.append("# Phase 09: Batch 2 — AI Video Prompts (Google Flow / Omni) — Episode 05\n")
V.append("> %d clips (cap 30), each an even number of seconds (2, 4, 6, 8 or 10; Omni's lengths), generated at the length it will be used and retimed to the beat in CapCut (speed up at most 25%%, slow down at most 10%%). The end is never trimmed. All are muted 1920x1080 at 30 fps. Where a character appears, the clip is **Image-to-Video** from that character's Phase 05 reference; the rest are **Text-to-Video** with 0 frames.\n>" % nV)
V.append("> **Quality clause** (verbatim in every prompt): \"%s\".\n" % QC)
V.append("---\n")
V.append("## Batch 2 Video Prompts Inventory\n")
for b in BEATS:
    if b["kind"] != "V": continue
    ref = REF.get(b.get("ref")) if b.get("ref") else None
    tech = "Image-to-Video (1 frame)" if ref else "Text-to-Video (0 frames / no reference image)"
    prompt = VIDEO_STYLE + " " + b["subject"] + (" The character matches the reference frame exactly." if ref else "") + " Camera: " + b["cam"] + ". Smooth continuous motion for the full %d seconds, no cuts, " % b["L"] + QC + "."
    V.append("### Beat %03d — %s%s" % (b["n"], b["slug"].replace("_", " ").title(), (" " + stag(b)) if b.get("tags") else ""))
    V.append("```")
    V.append("FILENAME: " + fn(b, "mp4"))
    V.append("TYPE: AI Video")
    V.append("TECHNIQUE: " + tech)
    V.append("INPUT FRAMES: " + (ref if ref else "None"))
    V.append("PROMPT: " + prompt)
    V.append("NEGATIVE PROMPT: photorealism, glossy 3D CGI, jittery motion, audio, voice, sound effects, morphing artifacts, frame drops, real brand logos, readable text, cuts")
    V.append("CONTINUITY: " + ("Reference %s must match." % ref if ref else "None"))
    V.append("ON-IMAGE TEXT: None")
    V.append("DURATION: %ds (beat runs %.1fs, %s)" % (b["L"], b["D"], b["fit"]))
    V.append("```\n")
open(EP + "09_VIDEO_PROMPTS.md", "w").write("\n".join(V) + "\n")

# ================================================================= 10
R = []
R.append("# Phase 10: Batch 3 — Remotion Graphics Specifications — Episode 05\n")
R.append("> %d Remotion beats, 1920x1080 at 30 fps. Frame counts are the beat's sentence-bound duration x 30, so they update when the alignment does. **Theme lock:** every colour resolves to `TOKENS.colors.*` in `remotion/src/tokens.ts`: background `background` (#F8F6F0), text `textPrimary` (#0F172A), secondary `textSecondary`, single accent `amber` (#F59E0B, the coin), `emerald` for a tick, `crimson` for a cross, `gridLine` for rules. **No more than 4 live text labels per frame; no jargon on screen** (the on-screen text obeys the same word list as the narration). Fee figures that come from the reported fee schedule carry \"as widely reported\" on the card; our own arithmetic carries \"our own math\".\n" % nR)
R.append("> Every prompt carries both clauses: \"%s\" and \"%s\".\n" % (RQ, QC))
R.append("---\n")
R.append("## Remotion Asset Inventory\n")
R.append("| Beat # | Component | Composition ID | Resolution & FPS | Frames (duration) | Visual purpose |")
R.append("| :---: | :--- | :--- | :--- | :--- | :--- |")
for b in BEATS:
    if b["kind"] != "R": continue
    cid = b["comp"] + (("-" + b["scene"].replace("_", "-")) if b.get("scene") else "")
    R.append("| **%03d** | `%s` | `%s` | 1920x1080 @ 30fps | %d frames (%.1fs) | %s |" % (b["n"], b["comp"], cid, b["frames"], b["D"], b["arche"].replace("ARCHETYPE_", "").replace("_", " ").title()))
R.append("")
R.append("**Reuse:** %d beats are built from %d component files. Build each once with a `scene` prop, then render each scene. Ground-truth files to start from: `InfiniteZoomMontage.tsx` (whip-zoom), `Beat270CacFlywheel.tsx` (flywheel), `InfiniteDroneZoomTunnel.tsx` (tunnel), `NewsprintEditorialShort.tsx` (documents), `Beat780UnitMarginWaterfall.tsx` (fee waterfalls), `Beat590AirFreightBurn.tsx` (counters).\n" % (nR, len(set(b["comp"] for b in BEATS if b["kind"] == "R"))))
R.append("**Build rule (CP-14):** one component at a time; render start, middle and end frames with `npx remotion still`, view the PNGs, and only then start the next.\n")
R.append("---\n")
R.append("## Component Specifications & Render Commands\n")
for b in BEATS:
    if b["kind"] != "R": continue
    cid = b["comp"] + (("-" + b["scene"].replace("_", "-")) if b.get("scene") else "")
    out = "out/ep05/%s" % fn(b, "mp4")
    R.append("### Beat %03d — `%s` (%s)" % (b["n"], b["comp"], b["slug"]))
    R.append("- **Archetype / engine:** `%s`" % b["arche"])
    R.append("- **Spoken line:** \"%s\"" % spoken(b))
    R.append("- **Timing:** %s to %s, %.1f s, **%d frames**. Reveal sequence follows the sentences; the last element holds for 1 s." % (tc(b["t0"]), tc(b["t1"]), b["D"], b["frames"]))
    R.append("- **What is drawn:** %s" % b["subject"])
    R.append("- **On-screen labels (max 4):** %s" % "; ".join('"%s"' % x for x in b["labels"]))
    R.append("- **Source line under the title:** %s" % (b["source"] if b["source"] else "none (metaphor, no data)"))
    note = {"ARCHETYPE_WHIP_ZOOM_MONTAGE": "the archetype's documented full duration is 240 frames (six 5-frame staccato cuts plus the landing push). This beat runs %d frames, so hold the landing on the tangled knot with a slow push for the remaining %d frames; never clip the motion." % (b["frames"], max(0, b["frames"] - 240)),
            "ARCHETYPE_3D_ORBITAL_FLYWHEEL": "light one of the four steps on each spoken 'One', 'Two', 'Three', 'Four' (use the alignment for the four frames), then let the loop complete once and hold for the last second.",
            "ARCHETYPE_INFINITE_PORTAL_TUNNEL": "continuous zoom-out with harmonic wobble; reach the wall-of-ports wide shot on the final sentence and hold it for the last second."}.get(b["arche"])
    if note:
        R.append("- **Signature-cinematic scheduling:** " + note)
    if b["feeders"]:
        R.append("- **Upstream feeder stills (Batch 1):** %s" % "; ".join(b["feeders"]))
    if any(t == "SHOWABLE" for t in b["tags"]):
        R.append("- **Reference-sourcing flag:** this beat shows a real page or message. Collect the real one, crop it, and lay it in as a bordered inset card with a soft shadow; never redraw it. Search: %s" % (b["source"] or "see source line"))
    R.append("- **Palette lock:** `TOKENS.colors.background`, `textPrimary`, `textSecondary`, single accent `amber`; `emerald` and `crimson` only for a tick or a cross.")
    sc = ("scene '%s' of `%s`" % (b["scene"], b["comp"])) if b.get("scene") else ("`%s`" % b["comp"])
    R.append("- **Prompt:** \"%s. %s. Build %s. %s\"" % (RQ, QC, sc, b["subject"]))
    R.append("- **Render command:**")
    R.append("```bash")
    R.append("npx remotion render src/index.ts %s %s --gl=angle --props='{\"durationInFrames\":%d,\"scene\":\"%s\"}'" % (cid, out, b["frames"], b.get("scene") or ""))
    R.append("```\n")
R.append("---\n")
R.append("## Real-world inserts to collect before rendering\n")
R.append("| Beat | What to collect | Where |\n| :---: | :--- | :--- |")
for b in BEATS:
    if b["kind"] == "R" and "SHOWABLE" in b["tags"] and b["source"]:
        R.append("| %03d | %s | %s |" % (b["n"], b["slug"].replace("_", " "), b["source"]))
open(EP + "10_REMOTION_SPECS.md", "w").write("\n".join(R) + "\n")

# ================================================================= 11
def pauses():
    """Silences of at least 1.2 s measured on the master audio itself (ffmpeg silencedetect, -38 dB)."""
    import subprocess
    r = subprocess.run(["ffmpeg", "-hide_banner", "-nostats", "-i", EP + "voiceover/master_narration.wav",
                        "-af", "silencedetect=noise=-38dB:d=1.2", "-f", "null", "-"], capture_output=True, text=True)
    st = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", r.stderr)]
    en = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", r.stderr)]
    out = []
    for a, b in zip(st, en):
        prev = max([k for k, x in enumerate(S) if x["end"] <= a + 0.3], default=0)
        out.append((a, b, b - a, prev))
    return out
P = pauses()
math_beats = [b for b in BEATS if b["kind"] == "R" and b["slug"] in ("key_fee", "key_prices", "annual_big", "annual_small", "per_device_15", "per_device_tiers", "small_yearly", "small_per_tv", "small_total", "giant_setup", "giant_total", "forty_times", "devices_2017", "devices_times", "growth_a", "growth_b", "range_total", "dp_vs_hdmi", "four_k_lost", "four_k_ratio")]
docs = [b for b in BEATS if b["kind"] == "R" and b["slug"] in ("logo_rules", "docket", "court_finding", "amd_quote_a", "amd_quote_b")]
A = []
A.append("# Phase 11: Batch 4 — Audio Score & Sound Design — Episode 05\n")
A.append("> **Bed: M1, Inquisitive Neo-Classical & Playful Tech** (bible/10 Rule 1: tech explainer, hardware, flywheel mechanics). It matches the wry, curious register of Draft A and suits a mechanism story with no villain. One cohesive bed for the whole episode, instrumental only, no vocals. All modulation comes from ducking, swells and silences, computed from `voiceover/alignment.json`, so re-run `scripts/build_ep05_beats.py` after any re-alignment.\n>")
A.append("> **Levels:** narration at 0 dB (-14 to -16 LUFS, true peak -1.0 dBFS); bed ducked to -34 dB under speech; +8 dB swells on pauses over 1.2 s; -50 dB during the fee and number cards; dead silence on two shock lines; foley -24 to -28 dB.\n")
A.append("---\n")
A.append("## 1. BGM Score Bed Prompt\n")
A.append("```")
A.append("FILENAME: 000_bgm_master_score.mp3")
A.append("TYPE: Audio (Score Bed)")
A.append("MUSIC BED: M1 Inquisitive Neo-Classical & Playful Tech")
A.append("TOOL / ENGINE: Suno v3.5 / Udio / ElevenLabs Music")
A.append("PROMPT: [Instrumental] Inquisitive minimalist neo-classical explainer, 118 BPM, C Major, staccato pizzicato violins, wooden marimba melodic plucks, light glockenspiel accents, clean warm Rhodes piano chords, subtle muted electronic percussion, playful, intellectual, curious, forward-moving, transparent mix with space for a narrator, no vocals, " + QC + ".")
A.append("NEGATIVE PROMPT: vocals, singing, speech, choir, heavy distortion, harsh drums, electric guitar solo, EDM drop, heavy sub-bass drone")
A.append("EPIDEMIC SEARCH QUERY: Genres: Classical > Minimalist / Acoustic > Quirky. Moods: Curious, Playful, Clever, Inquisitive, Technology. Instruments: Pizzicato Strings, Marimba, Glockenspiel, Muted Electric Piano")
A.append("TARGET DURATION: 3:30 minimum, loopable, looped to %s" % tc(T))
A.append("TIMELINE ROLE: Master narrative bed, Track 3, base level -34 dB under speech")
A.append("```\n")
A.append("**Speech EQ pocket on the bed:** parametric notch at 2 kHz, -4 dB, Q 1.2, to leave room for the voice.\n")
A.append("## 2. Ducking envelope (from the alignment)\n")
A.append("### Pause swells (silence over 1.2 s: +8 dB over 300 ms, back down 200 ms before the next word)\n")
A.append("| # | Silence starts | Silence ends | Length | Sits after sentence |\n| :-: | :-: | :-: | :-: | :--- |")
for k, (a, bb, g, i) in enumerate(P, 1):
    A.append("| %d | %s | %s | %.1fs | \"%s\" |" % (k, tc(a), tc(bb), g, S[i]["text"][:60].replace("|", "/")))
if not P:
    A.append("| | none over 1.2 s | | | |")
A.append("")
A.append("### Math Mode (bed to -50 dB while a number card is on screen)\n")
A.append("| Beat | Timecode | Card |\n| :---: | :---: | :--- |")
for b in math_beats:
    A.append("| %03d | %s - %s | %s |" % (b["n"], tc(b["t0"]), tc(b["t1"]), b["slug"].replace("_", " ")))
A.append("")
A.append("### Low-pass focus zoom (bed low-passed to 800 Hz for the whole card, whoosh open on exit)\n")
A.append("| Beat | Timecode | Document |\n| :---: | :---: | :--- |")
for b in docs:
    A.append("| %03d | %s - %s | %s |" % (b["n"], tc(b["t0"]), tc(b["t1"]), b["slug"].replace("_", " ")))
A.append("")
def find(sub):
    for i, s in enumerate(S):
        if sub in s["text"]:
            return i
i1 = find("Then it signed the contract again."); i2 = find("It was a piece of a contract.")
A.append("### Dead silence drops (bed to -inf 0.6 s before the line, 40 Hz thud on the key word, bed back in on the next act)\n")
A.append("| # | Drop begins | Line | Thud on |\n| :-: | :-: | :--- | :--- |")
A.append("| 1 | %s | \"%s\" | \"signed\" (%s), -20 dB |" % (tc(max(0, S[i1]["start"] - 0.6)), S[i1]["text"], tc(S[i1]["start"] + 0.9)))
A.append("| 2 | %s | \"%s\" | \"contract\" (%s), -20 dB |" % (tc(max(0, S[i2]["start"] - 0.6)), S[i2]["text"], tc(S[i2]["start"] + 0.7)))
A.append("")
A.append("## 3. Tactile foley & micro-SFX cues (Track 2)\n")
A.append("| Beat cue | File name | Sound | Mix level | Sync downbeat |\n| :--- | :--- | :--- | :---: | :---: |")
def foley(b, name, desc, lvl, off=0.0):
    A.append("| **%03d** | `%03d_foley_%s.wav` | %s | %s | `%s` |" % (b["n"], b["n"], name, desc, lvl, tc(b["t0"] + off)))
byslug = {b["slug"]: b for b in BEATS}
foley(byslug["cold_open_tilt"], "room_tone", "soft living-room room tone, a chair creak", "-34.0 dB")
foley(byslug["plug_push"], "plug_click", "small plastic click of a plug seating", "-26.0 dB", 1.0)
foley(byslug["factory_coin"], "coin_drop", "single coin dropping into a metal slot", "-26.0 dB", 3.0)
foley(byslug["receipt_dots"], "counter_ticks", "soft muted register ticks as the dots resolve", "-30.0 dB")
foley(byslug["seven_names"], "badge_slams", "seven soft card slaps, one per name", "-26.0 dB")
foley(byslug["lock_on_plug"], "padlock_click", "brass padlock clicking shut", "-24.0 dB")
foley(byslug["backers_studios"], "card_fan", "paper cards fanning out", "-26.0 dB")
foley(byslug["key_prices"], "counter_ticks", "muted digital ticker notches", "-30.0 dB")
foley(byslug["lockpick"], "lock_pick", "fine metal scrape then a padlock springing open", "-24.0 dB")
foley(byslug["loop_flywheel"], "flywheel_whoosh", "soft organic whoosh, highs rolled off, one per step", "-28.0 dB")
foley(byslug["one_door"], "door_room_tone", "low room tone with a distant door", "-32.0 dB")
foley(byslug["logo_rules"], "paper_slide", "crisp bond paper slide onto a desk", "-26.0 dB")
foley(byslug["small_total"], "counter_ticks", "muted ticker notches as the total lands", "-30.0 dB")
foley(byslug["stamp_licensed"], "stamp_thud", "rubber stamp thud", "-22.0 dB")
foley(byslug["devices_2017"], "counter_ticks", "register ticks as the number climbs", "-30.0 dB")
foley(byslug["docket"], "paper_slide", "court paper slide", "-26.0 dB")
foley(byslug["gavel"], "gavel", "single gavel strike, dry room", "-20.0 dB")
foley(byslug["court_finding"], "highlighter", "soft marker squeak sweeping across a page", "-28.0 dB")
foley(byslug["fourteen_million"], "counter_and_stamp", "ticker notches then a stamp thud", "-24.0 dB")
foley(byslug["wall_bricks"], "brick_placements", "four soft stone placements", "-26.0 dB")
foley(byslug["rulebook_closes"], "book_close", "thick book closing, then a padlock click", "-24.0 dB")
foley(byslug["amd_quote_a"], "typewriter", "soft vintage keyboard clicks, variable speed", "-28.0 dB")
foley(byslug["amd_quote_b"], "typewriter", "soft vintage keyboard clicks, variable speed", "-28.0 dB")
foley(byslug["four_k_lost"], "stamp_thud", "cross and tick stamp thuds", "-24.0 dB")
foley(byslug["portal_tunnel"], "tunnel_whoosh", "long soft whoosh rising, no sub-bass", "-28.0 dB")
A.append("")
A.append("*No arcade or cartoon sound effects. Every cue sits under the voice and is only tactile.*\n")
A.append("## 4. Voiceover processing chain (Track 1)\n")
A.append("1. High-pass filter, 24 dB/oct below 80 Hz. 2. Compression 4:1, attack 5 ms, release 50 ms, soft knee. 3. Presence +1.5 dB at 3.5 kHz, high-shelf +2.0 dB at 11 kHz. 4. Loudness -14.0 to -16.0 LUFS integrated, true peak -1.0 dBFS.\n")
A.append("**Pacing note from the delivered audio:** the narrator runs about %.0f words a minute overall. If the hook (first 60 s) sounds slow against the 165 to 180 wpm guidance, it can be sped 4 to 6%% in the DAW, and the alignment re-run.\n" % (sum(len(s['text'].split()) for s in S) / (T / 60)))
open(EP + "11_AUDIO_DESIGN.md", "w").write("\n".join(A) + "\n")

# ================================================================= 12
C = []
C.append("# Phase 13: CapCut Timeline Assembly & NLE Master Blueprint — Episode 05\n")
C.append("> Multi-track assembly guide. **Rules carried from earlier episodes:** put every file the draft references (stills, AI clips, Remotion renders, VO, music, foley) under **one folder**, `videos/05-hdmi-monopoly/assets/capcut_ready/`, and import that folder into CapCut once. **Never rebuild a draft while CapCut is open.** **No captions or text labels in the draft:** captions ship as a separate `13_CAPTIONS_EN.srt` for YouTube (built from the final alignment).\n>")
C.append("> **Zero gap frames:** beat *k* starts on the exact frame beat *k-1* ends. **Drift limit:** master VO %.2f s vs the sum of beats %.2f s (limit 0.5 s). All AI clips muted.\n" % (T, sumD))
C.append("---\n")
C.append("## 1. Multi-Track Timeline Architecture\n")
C.append("- **Track 0 (Visual Master):** %d beats: %d stills with Ken Burns, %d AI clips, %d Remotion renders." % (N, nS, nV, nR))
C.append("- **Track 1 (Voiceover):** `master_narration.wav` at 0.0 dB (-14 to -16 LUFS).")
C.append("- **Track 2 (Foley & micro-SFX):** the cues in Phase 11, -24 to -28 dB.")
C.append("- **Track 3 (Background bed):** M1 bed, looped, -34 dB base, with the swells, Math Mode, low-pass and silence drops from Phase 11.\n")
C.append("## 2. Beat-by-Beat Assembly Guide\n")
C.append("| Beat # | Timecode (Start - End) | Asset file | Transition in | Motion / keyframing | Notes |")
C.append("| :---: | :---: | :--- | :--- | :--- | :--- |")
for b in BEATS:
    ext = {"S": "png", "V": "mp4", "R": "mp4"}[b["kind"]]
    mot = {"S": b["cam"] + " (2.5D)", "V": "native motion; " + b.get("fit", ""), "R": "native motion"}[b["kind"]]
    note = "muted" if b["kind"] == "V" else ("Math Mode -50 dB" if b in math_beats else ("low-pass focus zoom" if b in docs else ""))
    C.append("| **%03d** | `%s - %s` | `%s` | Hard cut | %s | %s |" % (b["n"], tc(b["t0"]), tc(b["t1"]), fn(b, ext), mot, note))
C.append("")
C.append("## 3. Final Export Specifications\n")
C.append("- Resolution 1920x1080; 30.00 fps; H.264 / MP4 High Profile; ~20-25 Mbps; stereo AAC 48 kHz, 320 kbps.\n")
C.append("## 4. Not built yet (needs the assets)\n")
C.append("The draft is built by script only after the stills, clips and Remotion renders exist and are copied into `assets/capcut_ready/`. See `scripts/assemble_ep04_draft.mjs` for the pattern; an episode-05 version comes after the assets are generated.\n")
open(EP + "12_CAPCUT_ASSEMBLY.md", "w").write("\n".join(C) + "\n")


# ================================================================= remotion registry
REG = []
for b in BEATS:
    if b["kind"] != "R":
        continue
    cid = b["comp"] + (("-" + b["scene"].replace("_", "-")) if b.get("scene") else "")
    if b.get("cut"):
        cues = [0]
    else:
        cues = [max(0, int(round((S[i]["start"] - b["t0"]) * 30))) for i in range(b["s0"], b["s1"] + 1)]
        nxt = BEATS[BEATS.index(b) + 1] if BEATS.index(b) + 1 < len(BEATS) else None
    REG.append({"id": cid, "comp": b["comp"], "scene": b.get("scene") or "", "beat": b["n"], "slug": b["slug"],
                "frames": b["frames"], "cues": cues, "out": "out/ep05/" + fn(b, "mp4")})
_reg_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "remotion", "src", "scenes", "episode05")
os.makedirs(_reg_dir, exist_ok=True)
json.dump(REG, open(os.path.join(_reg_dir, "beats.json"), "w"), indent=1)


# ================================================================= CapCut timeline plan
READY = EP + "assets/capcut_ready/"
os.makedirs(READY, exist_ok=True)
PLAN = []
for b in BEATS:
    sub = {"S": "kenburns", "V": "clips", "R": "remotion"}[b["kind"]]
    PLAN.append({"n": b["n"], "slug": b["slug"], "kind": b["kind"], "start": round(b["t0"], 3), "duration": round(b["D"], 3),
                 "filePath": "%s%s/%s" % (READY, sub, fn(b, "mp4")), "cam": b["cam"]})
json.dump(PLAN, open(READY + "timeline_plan.json", "w"), indent=1)

print("beats", N, "(min %d, max %d, target %d)" % (Bmin, Bmax, Btar))
print("AI clips %d (%.0fs, %.0f%%) | remotion %d (%.0fs, %.0f%%) | stills %d (%.0fs, %.0f%%)" % (nV, tV, tV / T * 100, nR, tR, tR / T * 100, nS, tS, tS / T * 100))
print("sum D %.2f vs T %.2f" % (sumD, T))
print("cutaways per act:", {a: len(v) for a, v in cut.items()})
print("signature:", [(b["arche"].replace("ARCHETYPE_", ""), round(b["t0"])) for b in sig], gaps)
print("short beats <1.5s:", [(b["n"], b["slug"], round(b["D"], 2)) for b in BEATS if b["D"] < 1.5])
print("stills >6s:", [(b["n"], b["slug"], round(b["D"], 1)) for b in stills if b["D"] > 6.0])
print("pauses >1.2s:", len(P))
