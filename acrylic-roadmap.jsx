import { useState, useEffect } from "react";
import { Check, ChevronDown, ChevronRight, Circle, Play, Flame, Trophy, Target, Lock } from "lucide-react";

// ---- resource link bank (verified creators) ----
const L = {
  WK_LS: "https://willkempartschool.com/how-to-acrylic-paint-light-and-shade-part-3/",
  WK_CH1: "https://willkempartschool.com/beginners-acrylic-still-life-course-part-1/",
  WK_CH2: "https://willkempartschool.com/beginners-acrylic-still-life-course-part-2/",
  WK_CH34: "https://willkempartschool.com/beginners-acrylic-still-life-course-part-3-part-4/",
  WK_CMC: "https://willkempartschool.com/product/simple-colour-mixing-acrylic-course/",
  WK_PORT: "https://willkempartschool.com/product/acrylic-portrait-course/",
  WK_PALETTE: "https://willkempartschool.com/how-to-set-out-an-acrylic-paint-palette/",
  WK_BEGINNERS: "https://willkempartschool.com/acrylic-painting/",
  WK_GLAZE: "https://willkempartschool.com/how-to-glaze-with-acrylics/",
  WK_WARMCOOL: "https://willkempartschool.com/how-to-balance-warm-and-cool-colours/",
  WK_COLOURMIX: "https://willkempartschool.com/how-to-choose-a-basic-acrylic-palette-for-colour-mixing/",
  WK_POTS: "https://willkempartschool.com/how-to-paint-a-still-life-plant-pot-with-acrylics-free-video-tutorial/",
  WK_SNOW: "https://willkempartschool.com/how-to-paint-a-snowscene-in-acrylic/",
  WK_FISHINGBOAT: "https://willkempartschool.com/acrylic-step-by-step-tutorial-for-beginners/",
  WK_WARMCOOL1: "https://willkempartschool.com/how-to-paint-a-warm-and-cool-still-life-painting-using-2-colours/",
  WK_WARMCOOL2: "https://willkempartschool.com/how-to-paint-a-warm-cool-still-life-painting-using-only-2-colours-part-2/",
  WK_WARMCOOL3: "https://willkempartschool.com/how-to-paint-a-warm-cool-still-life-painting-using-only-2-colours-part-3/",
  DMP: "https://www.drawmixpaint.com/",
  DMP_YT: "https://www.youtube.com/user/DrawMixPaint",
  DMP_STEP1: "https://www.drawmixpaint.com/classes/online/step-1-setting-up-your-studio.html",
  DMP_PORT: "https://www.drawmixpaint.com/painting-portraits.html",
  PROKO_YT: "https://www.youtube.com/@ProkoTV",
  PROKO_NOTAN: "https://www.proko.com/course-lesson/demo-1-notan-master-thumbnails",
  PROKO_LOOMIS: "https://www.proko.com/course-lesson/quickly-draw-heads-with-the-loomis-method-part-1",
  PROKO_LOOMIS3: "https://www.proko.com/course-lesson/intuitive-portrait-sketching-with-the-loomis-method-part-3",
  PROKO_PORTRAIT: "https://www.proko.com/portrait-drawing-fundamentals-course/",
  BUCCI_YT: "https://www.youtube.com/@MarcoBucci",
  GOSHEN_COLL: "https://www.patreon.com/collection/66123?view=expanded",
  GOSHEN_PROP: "https://www.patreon.com/posts/art-of-98936065",
  GOSHEN_LS: "https://www.patreon.com/posts/mastering-light-104668444",
  GOSHEN_MAIN: "https://www.patreon.com/kengoshen",
  GOSHEN_YT: "https://www.youtube.com/kengoshen",
};
const v = (label, url, cost = "free") => ({ label, url, cost });

// ---- curriculum ----
const STAGES = [
  {
    id: "s1", name: "Setup & First Marks", accent: "#a8763e",
    blurb: "Get the kit right and learn how acrylic behaves. Tiny wins, fast.",
    milestones: [
      { id: "m11", title: "Kit & stay-wet palette", goal: "Palette set up; you understand water ratio & open time.", sessions: [
        { id: "m11a", do: "Set up your stay-wet palette and lay out a limited palette the way he shows.", watch: v("Will Kemp — how to set out a stay-wet palette", L.WK_PALETTE) },
        { id: "m11b", do: "Watch his acrylic overview: why it dries fast & dries darker, and how to fight it.", watch: v("Will Kemp — acrylic painting for beginners (overview)", L.WK_BEGINNERS) },
      ]},
      { id: "m12", title: "Brush control drills", goal: "Clean flat coverage, a smooth gradient, 3 mark types.", sessions: [
        { id: "m12a", do: "Paint a 9-step value scale (black→white).", watch: v("Will Kemp — light & shade (value/tone)", L.WK_LS) },
        { id: "m12b", do: "Flat even coverage + one smooth two-colour blend, no banding.", watch: v("Will Kemp — beginners: brush handling & ground", L.WK_BEGINNERS) },
        { id: "m12c", do: "Practice drybrush, glaze and scumble — the marks transfer straight from miniatures.", watch: v("Will Kemp — how to glaze with acrylics", L.WK_GLAZE) },
      ]},
    ],
  },
  {
    id: "s2", name: "Value — The Foundation", accent: "#8a6f3e",
    blurb: "If a painting fails, it's almost always value. This is the most important stage.",
    milestones: [
      { id: "m21", title: "Light logic on a form", goal: "You can name core shadow, cast shadow, reflected light, highlight.", sessions: [
        { id: "m21a", do: "Watch the sphere / light-logic theory.", watch: v("Will Kemp — How to Paint Light & Shade, Pt 1", L.WK_LS) },
        { id: "m21b", do: "Watch the 5 elements of light on form.", watch: v("Marco Bucci — light & form (YouTube)", L.BUCCI_YT) },
      ]},
      { id: "m22", title: "Grisaille apple", goal: "Object reads 3D in one dark + white, no colour.", sessions: [
        { id: "m22a", do: "Pencil block-in of the apple from his reference — this exact drawing becomes the lines under your painting.", watch: v("Will Kemp — Light & Shade, Pt 2 (drawing)", L.WK_LS), tag: "underdrawing" },
        { id: "m22b", do: "Follow Pt 3 but stop at the monochrome stage — value only.", watch: v("Will Kemp — Light & Shade, Pt 3 (paint)", L.WK_LS) },
      ]},
      { id: "m23", title: "Notan / value design", goal: "You can reduce any image to 2–3 flat value shapes.", sessions: [
        { id: "m23a", do: "Watch how to simplify a master image into 2 then 3 values.", watch: v("Proko — Notan Master Thumbnails (demo)", L.PROKO_NOTAN) },
        { id: "m23b", do: "Do 3 quick notan thumbnails from your own photos.", watch: v("Proko — Notan demo (reference)", L.PROKO_NOTAN) },
      ]},
    ],
  },
  {
    id: "s3", name: "Colour & Mixing", accent: "#7a7d3e",
    blurb: "Stop mixing mud. Learn to see colour accurately and hit it from few pigments.",
    milestones: [
      { id: "m31", title: "See colour accurately", goal: "You can match a colour instead of guessing it.", sessions: [
        { id: "m31a", do: "Watch Carder on why 'what you think you see' blocks you, then his mixing method.", watch: v("Draw Mix Paint — colour mixing method", L.DMP) },
        { id: "m31b", do: "Mix & match 6 target colours from a photo using his approach.", watch: v("Draw Mix Paint — videos (YouTube)", L.DMP_YT) },
      ]},
      { id: "m32", title: "Limited-palette mixing chart", goal: "A full chart from 3 pigments + white.", sessions: [
        { id: "m32a", do: "Make a warm/cool chart from Burnt Sienna + Ultramarine + Titanium White, then follow his 2-colour jug study.", watch: v("Will Kemp — how to balance warm & cool colours", L.WK_WARMCOOL), more: [v("Will Kemp — warm & cool jug, Pt 1", L.WK_WARMCOOL1), v("Will Kemp — warm & cool jug, Pt 2", L.WK_WARMCOOL2), v("Will Kemp — warm & cool jug, Pt 3", L.WK_WARMCOOL3)] },
        { id: "m32b", do: "Match 4 colours (incl. one muted) and paint swatches beside the reference.", watch: v("Will Kemp — balance warm & cool (reference)", L.WK_WARMCOOL) },
      ]},
      { id: "m33", title: "Colour in light & shadow", goal: "You understand how local colour shifts in light vs shadow.", sessions: [
        { id: "m33a", do: "Watch how temperature changes between lit and shadowed planes.", watch: v("Marco Bucci — colour temperature (YouTube)", L.BUCCI_YT) },
        { id: "m33b", do: "Paint one simple object applying warm-light / cool-shadow.", watch: v("Marco Bucci — colour & light (reference)", L.BUCCI_YT) },
      ]},
    ],
  },
  {
    id: "s4", name: "Still Life — Form in Paint", accent: "#5a7d5a",
    blurb: "Your first finished pieces. Repeat the same subject — that's where skill sticks.",
    milestones: [
      { id: "m41", title: "First finished painting (cherry)", goal: "A complete small still life, value structure intact.", sessions: [
        { id: "m41a", do: "Follow along: drawing out + tonal ground.", watch: v("Will Kemp — Cherry still life, Pt 1", L.WK_CH1) },
        { id: "m41b", do: "Follow along: building the form.", watch: v("Will Kemp — Cherry still life, Pt 2", L.WK_CH2) },
        { id: "m41c", do: "Follow along: glazing + finishing.", watch: v("Will Kemp — Cherry still life, Pts 3 & 4", L.WK_CH34) },
      ]},
      { id: "m42", title: "Repeat & re-colour", goal: "Same subject, twice — once solo, once in a new palette.", sessions: [
        { id: "m42a", do: "Paint the cherry again WITHOUT the video.", watch: v("Will Kemp — Cherry (reference only)", L.WK_CH34) },
        { id: "m42b", do: "Paint the same object in a different colour scheme.", watch: v("Will Kemp — warm & cool palette variation", L.WK_WARMCOOL) },
      ]},
      { id: "m43", title: "Your own multi-object still life", goal: "3–5 objects you set up, drawn accurately then painted.", sessions: [
        { id: "m43a", do: "Follow the terracotta-pots / glazing lesson for handling multiple objects.", watch: v("Will Kemp — terracotta plant pots still life", L.WK_POTS) },
        { id: "m43b", do: "Set up 3–5 of your own objects. Lightly pencil them using comparative measuring & ellipses — this drawing is the underdrawing your paint sits on.", watch: v("Draw Mix Paint — measuring & drawing in proportion", L.DMP_STEP1), tag: "underdrawing" },
        { id: "m43c", do: "Paint your setup over that drawing — expanded palette, reflected light.", watch: v("Will Kemp — basic palette for colour mixing", L.WK_COLOURMIX), alt: v("Will Kemp — Simple Colour Mixing course", L.WK_CMC, "paid") },
      ]},
      { id: "m44", title: "Edges", goal: "Hard, soft and lost edges placed on purpose.", sessions: [
        { id: "m44a", do: "Watch how edges control focus and the illusion of form.", watch: v("Marco Bucci — edges (YouTube)", L.BUCCI_YT) },
        { id: "m44b", do: "Paint one object using all three edge types.", watch: v("Will Kemp — light & shadow edges (reference)", L.WK_LS) },
      ]},
    ],
  },
  {
    id: "s6", name: "Poster Reproductions (your board)", accent: "#3e6f8a",
    blurb: "Your board is mostly flat, limited-palette graphic work — ideal beginner acrylic. Easiest first (clean mid-century ads) → Soviet Constructivist → a stylised face as a bridge to real portraits. Your woodblock & atmospheric landscapes live in Stage 7; the Rockwell Kent engravings are value copies in Stage 8.",
    milestones: [
      { id: "m61", title: "Flat mid-century ad", goal: "A dead-clean flat repro: 3–4 colours, crisp edges.", sessions: [
        { id: "m61a", do: "Pick the simplest flat ad on your board — the Pan Am globe, Air France 'à la pointe du progrès', or a Campari/Aperol — and notan it to its big shapes.", watch: v("Proko — Notan (reference)", L.PROKO_NOTAN) },
        { id: "m61b", do: "Scale up and paint it flat: 3–4 colours, razor-clean edges, no blending.", watch: v("Will Kemp — beginners: clean coverage & brushwork", L.WK_BEGINNERS) },
      ]},
      { id: "m62", title: "Soviet Constructivist poster", goal: "A 2–3 colour piece that holds its diagonal composition.", sessions: [
        { id: "m62a", do: "Pick a Constructivist pin — 'к Марсу' (rocket), 'ВПЕРЁД!' (worker + hammer), or Rodchenko's 'Books' — and plan it: notan + a red/black/cream colour key.", watch: v("Marco Bucci — colour schemes (YouTube)", L.BUCCI_YT) },
        { id: "m62b", do: "Paint it, holding the diagonal thrust and the tight red/black/cream palette.", watch: v("Will Kemp — beginners: flat colour & shape", L.WK_BEGINNERS) },
      ]},
      { id: "m63", title: "A stylised face (bridge to portraits)", goal: "A face built from flat value shapes — no realism required.", sessions: [
        { id: "m63a", do: "Pick a stylised face — the 'ALEKSANDR RODCHENKO' portrait or the 'Books' shouting woman — and notan the face into light/shadow shapes, not features.", watch: v("Proko — Notan (reference)", L.PROKO_NOTAN) },
        { id: "m63b", do: "Paint it as flat value shapes. Likeness comes from the shape map, not detail — your on-ramp to Stage 9.", watch: v("Marco Bucci — value shapes on the head (reference)", L.BUCCI_YT) },
      ]},
    ],
  },
  {
    id: "s7", name: "Landscape & Atmosphere", accent: "#5a6f8a",
    blurb: "Depth via value, not detail. This is where your board's woodblock and atmospheric pins live — you'll reproduce the Hasui snow mountain, the Hokusai wave and the sunset-harbour scenes here.",
    milestones: [
      { id: "m71", title: "Aerial perspective", goal: "3+ planes of depth in one painting.", sessions: [
        { id: "m71a", do: "Follow the limited-palette snow scene, Pt 1.", watch: v("Will Kemp — simple snow scene (limited palette)", L.WK_SNOW) },
        { id: "m71b", do: "Finish it — soft graded sky, no banding.", watch: v("Will Kemp — simple snow scene (reference)", L.WK_SNOW) },
      ]},
      { id: "m72", title: "Skies & water", goal: "A convincing sky or water study.", sessions: [
        { id: "m72a", do: "Follow the seascape series for water + sky handling.", watch: v("Will Kemp — fishing-boat seascape step-by-step", L.WK_FISHINGBOAT) },
        { id: "m72b", do: "Paint one sky study from a photo.", watch: v("Will Kemp — fishing-boat seascape (reference)", L.WK_FISHINGBOAT) },
      ]},
    ],
  },
  {
    id: "s8", name: "Master Copies", accent: "#7a5a8a",
    blurb: "The fastest way to steal real skill. Value copy first, colour copy second. The Rockwell Kent wood-engravings on your board (Voyaging, the storm ship) are perfect monochrome value copies.",
    milestones: [
      { id: "m81", title: "Value master copy", goal: "Your copy reproduces the master's value map.", sessions: [
        { id: "m81a", do: "Pick a simple-value master — a Rockwell Kent engraving from your board (Voyaging, the storm ship), a Sargent oil sketch, or a Hammershøi interior — and notan it.", watch: v("Proko — Notan master thumbnails", L.PROKO_NOTAN) },
        { id: "m81b", do: "Block in the big value masses, no detail.", watch: v("Marco Bucci — big shapes / value (reference)", L.BUCCI_YT) },
        { id: "m81c", do: "Finish in monochrome.", watch: v("Will Kemp — grisaille (reference)", L.WK_LS) },
      ]},
      { id: "m82", title: "Colour master copy", goal: "A faithful full-colour copy with matched relationships.", sessions: [
        { id: "m82a", do: "Analyse the master's colour scheme and make a colour key.", watch: v("Marco Bucci — colour & light (YouTube)", L.BUCCI_YT) },
        { id: "m82b", do: "Paint the full-colour copy, matching relationships not local colour.", watch: v("Draw Mix Paint — colour matching (reference)", L.DMP_YT) },
      ]},
    ],
  },
  {
    id: "s9", name: "The Head — Build It, Then Paint It", accent: "#8a5a6f",
    blurb: "Here the pencil work IS the underdrawing for a painted head — you'll watch your construction turn into paint.",
    milestones: [
      { id: "m91", title: "Build the head you'll paint", goal: "A construction drawing of your subject, ready to paint over.", sessions: [
        { id: "m91a", do: "Watch the Loomis method (Parts 1–3) and construct ONE practice head (front) just to learn the system.", watch: v("Proko — Loomis Method, Pt 1", L.PROKO_LOOMIS), more: [v("Proko — Loomis Method, Pt 3 (intuitive)", L.PROKO_LOOMIS3), v("Proko — head playlist (Pt 2 + more)", L.PROKO_YT)] },
        { id: "m91b", do: "Now construct YOUR subject's head (from your chosen photo) at 3/4 in pencil — this is the actual underdrawing for your painting.", watch: v("Proko — head drawing (YouTube playlist)", L.PROKO_YT), tag: "underdrawing" },
        { id: "m91c", do: "Refine that drawing's eyes, nose, mouth and ears using the feature lessons as reference.", watch: v("Proko — facial features (YouTube)", L.PROKO_YT), tag: "underdrawing" },
      ]},
      { id: "m92", title: "Paint the head in value", goal: "A grisaille painted directly over your construction.", sessions: [
        { id: "m92a", do: "Paint a monochrome head straight over your underdrawing — see the drawing become the painting.", watch: v("Marco Bucci — painting the head in value (YouTube)", L.BUCCI_YT), alt: v("Ken Goshen — Mastering Light & Shadow", L.GOSHEN_LS, "paid") },
      ]},
    ],
  },
  {
    id: "s10", name: "Skin & Colour Portrait", accent: "#9a5b3f",
    blurb: "The difficulty cliff. Pre-mix flesh, chase value structure, ignore likeness for now.",
    milestones: [
      { id: "m101", title: "Flesh mixing", goal: "A set of skin 'strings' (light→shadow) you can mix on demand.", sessions: [
        { id: "m101a", do: "Watch fleshtone mixing & blending.", watch: v("Draw Mix Paint — fleshtone mixing (free YouTube)", L.DMP_YT), alt: v("Draw Mix Paint — Painting Portraits (full course)", L.DMP_PORT, "paid") },
        { id: "m101b", do: "Mix and swatch a full skin string before any portrait.", watch: v("Draw Mix Paint — colour mixing (free YouTube)", L.DMP_YT) },
      ]},
      { id: "m102", title: "Guided colour portrait", goal: "Two portraits following a structured acrylic method.", sessions: [
        { id: "m102a", do: "Follow Portrait 1 — pre-mix skin, build value first.", watch: v("Draw Mix Paint — portrait painting (free YouTube)", L.DMP_YT), alt: v("Will Kemp — Acrylic Portrait Course, Portrait 1", L.WK_PORT, "paid") },
        { id: "m102b", do: "Follow Portrait 2 — different complexion.", watch: v("Marco Bucci — painting portraits (YouTube)", L.BUCCI_YT), alt: v("Will Kemp — Acrylic Portrait Course, Portrait 2", L.WK_PORT, "paid") },
      ]},
      { id: "m103", title: "Portrait from a photo (solo)", goal: "A full portrait you took start to finish.", sessions: [
        { id: "m103a", do: "Watch the full photo-to-portrait process (photograph, draw, block, flesh, likeness).", watch: v("Draw Mix Paint — portrait process (free YouTube)", L.DMP_YT), alt: v("Draw Mix Paint — Painting Portraits (8-hr course)", L.DMP_PORT, "paid") },
        { id: "m103b", do: "Paint a portrait from a stock photo, focusing on value structure.", watch: v("Draw Mix Paint — portraits (free YouTube reference)", L.DMP_YT) },
      ]},
    ],
  },
  {
    id: "s11", name: "Classical Method (Goshen)", accent: "#7a4a5a",
    blurb: "The summit you named. Goshen's atelier process: proportions → light & shadow → portrait from life.",
    milestones: [
      { id: "m111", title: "Goshen: proportions", goal: "Atelier-level measuring & seeing.", sessions: [
        { id: "m111a", do: "Work through proportions/measuring and its drills.", watch: v("Ken Goshen — free lessons (YouTube)", L.GOSHEN_YT), alt: v("Ken Goshen — The Art of Proportions (Patreon)", L.GOSHEN_PROP, "paid") },
        { id: "m111b", do: "Apply it: a measured portrait drawing from a photo.", watch: v("Proko — measuring & head construction (free YouTube)", L.PROKO_YT), alt: v("Ken Goshen — lessons collection (Patreon)", L.GOSHEN_COLL, "paid") },
      ]},
      { id: "m112", title: "Goshen: light & shadow", goal: "A classical monochrome head study.", sessions: [
        { id: "m112a", do: "Work through classical light & shadow.", watch: v("Ken Goshen — free lessons (YouTube)", L.GOSHEN_YT), alt: v("Ken Goshen — Mastering Light & Shadow (Patreon)", L.GOSHEN_LS, "paid") },
        { id: "m112b", do: "Paint a monochrome head study (acrylic is supported).", watch: v("Marco Bucci — head in value (free YouTube)", L.BUCCI_YT), alt: v("Ken Goshen — collection (Patreon)", L.GOSHEN_COLL, "paid") },
      ]},
      { id: "m113", title: "Goshen: portrait from life", goal: "A colour portrait following his full process.", sessions: [
        { id: "m113a", do: "Follow a portrait-from-life demo, first half.", watch: v("Ken Goshen — free portrait demos (YouTube)", L.GOSHEN_YT), alt: v("Ken Goshen — Portrait From Life (Patreon)", L.GOSHEN_COLL, "paid") },
        { id: "m113b", do: "Finish the portrait, second half of the process.", watch: v("Draw Mix Paint — portrait process (free YouTube)", L.DMP_YT), alt: v("Ken Goshen — Portrait From Life (Patreon)", L.GOSHEN_COLL, "paid") },
      ]},
    ],
  },
  {
    id: "s12", name: "Capstone — Your People", accent: "#6a4a7a",
    blurb: "Everything aimed here: the people you actually want on your wall.",
    milestones: [
      { id: "m121", title: "Portrait of your GF", goal: "A finished colour portrait that looks like her.", sessions: [
        { id: "m121a", do: "Plan it: photograph & light her well, then construct & measure the drawing that becomes your underdrawing, plus a notan + colour key.", watch: v("Draw Mix Paint — photographing & drawing the subject (free YouTube)", L.DMP_YT), alt: v("Draw Mix Paint — Painting Portraits (course)", L.DMP_PORT, "paid"), tag: "underdrawing" },
        { id: "m121b", do: "Paint the grisaille / value underpainting.", watch: v("Marco Bucci — value underpainting (free YouTube)", L.BUCCI_YT), alt: v("Ken Goshen — Light & Shadow (Patreon)", L.GOSHEN_LS, "paid") },
        { id: "m121c", do: "Build colour flesh passes and finish.", watch: v("Draw Mix Paint — fleshtones (free YouTube)", L.DMP_YT), alt: v("Ken Goshen — Portrait From Life (Patreon)", L.GOSHEN_COLL, "paid") },
      ]},
      { id: "m122", title: "Family portraits", goal: "More faces, more confidence.", sessions: [
        { id: "m122a", do: "Paint a second family portrait from a photo.", watch: v("Draw Mix Paint — portraits (free YouTube)", L.DMP_YT) },
        { id: "m122b", do: "Attempt a two-person / family composition.", watch: v("Proko — composition / portraits (free YouTube)", L.PROKO_YT), alt: v("Ken Goshen — collection (Patreon)", L.GOSHEN_COLL, "paid") },
      ]},
      { id: "m123", title: "Keep the habit", goal: "An ongoing weekly small-painting practice.", sessions: [
        { id: "m123a", do: "Set a 'one small painting a week' habit, varying subject/palette.", watch: v("Will Kemp — acrylic painting for beginners (daily practice)", L.WK_BEGINNERS) },
      ]},
    ],
  },
];

// per-session deliberate practice: d = decide before you start, c = how to check, t = accidental trap to avoid
const FOCUS = {
  m11a: { d: "Lay colours in a fixed order you keep every time, so mixing becomes muscle memory.", c: "Can you find each colour without looking?", t: "Squeezing random blobs wherever there's space." },
  m11b: { d: "Note the two fixes for fast drying you'll actually use: stay-wet palette + retarder/Open acrylics.", c: "You can say why a colour looked right wet but dried wrong." },
  m12a: { d: "Hit 9 EVENLY spaced steps — equal jumps, not random greys.", c: "Greyscale-photograph it; should look like a smooth staircase, no doubled steps.", t: "Eyeballing 'darker… darker' without measuring the interval." },
  m12b: { d: "One pass of flat colour with zero streaks; one blend with no visible band.", c: "Tilt to the light — streaks and bands show as sheen changes.", t: "Overworking a half-dry blend into a hard line." },
  m12c: { d: "Produce each of the three marks on purpose and label which is which.", c: "Could someone else tell your drybrush from your scumble?", t: "Calling any rough mark 'texture' — name the technique." },
  m21a: { d: "Memorise the order: light → halftone → core shadow → reflected light → cast shadow.", c: "Sketch the 5 zones on a circle from memory." },
  m21b: { d: "Lock the rule: reflected light is always darker than the lightest light.", c: "You can explain why too-bright reflected light flattens form." },
  m22a: { d: "Place the cast-shadow ellipse and the form's axis by MEASURING angles, not by feel.", c: "Hold the pencil up to check each angle against the reference before committing.", t: "Drawing a generic apple from your head instead of THIS apple." },
  m22b: { d: "Set your darkest dark and lightest light first, then fit everything between them.", c: "Greyscale-compare to the reference; your core shadow should sit where its does.", t: "Starting in the midtones and getting stuck with no range left." },
  m23a: { d: "Learn the threshold decision: every area is either light-group or dark-group.", c: "You can say where you'd cut the threshold on a sample image." },
  m23b: { d: "Design 2–3 CLEAN shapes per thumbnail — squint and commit, don't trace detail.", c: "Shrink it tiny; it should still read as a strong design.", t: "Outlining objects then filling in — notan is masses, not outlines." },
  m31a: { d: "Take on the core idea: match the colour you SEE, not the colour you NAME.", c: "Name one colour you've always painted 'wrong' because you painted its label." },
  m31b: { d: "Adjust each mix by asking value first, then temperature, then chroma.", c: "Lay your mix beside the target and squint — does it disappear into it?", t: "Mixing 'about right' and moving on without holding it to the target." },
  m32a: { d: "Prove you can reach a huge range from 3 pigments + white.", c: "Find a muted green AND a muted purple in your own chart.", t: "Reaching for a 4th tube the moment a mix is hard." },
  m32b: { d: "Mute one colour with its COMPLEMENT, not black.", c: "The muted swatch should still read as that hue, just quieter.", t: "Killing chroma with black until it goes grey and dead." },
  m33a: { d: "Lock the rule: warm light → cool shadow (or the reverse) — pick one per painting.", c: "Point to the lit-vs-shadow temperature shift in a master image." },
  m33b: { d: "Decide your light temperature BEFORE the first stroke; keep shadows the opposite.", c: "Greyscale it — value must still read even with the temperature trick.", t: "Letting every plane drift warm because warm paint looks 'nicer'." },
  m41a: { d: "Match his drawing by measuring, not copying line-for-line.", c: "Overlay-check your proportions against his reference frame." },
  m41b: { d: "Follow his value sequence, but say out loud which zone each stroke is.", c: "Pause halfway and greyscale-check against his stage." },
  m41c: { d: "Use each glaze to change one specific thing, decided in advance.", c: "Name what the glaze did (deepened the shadow? warmed the half-tone?).", t: "Glazing randomly hoping it improves." },
  m42a: { d: "Rebuild it from the skills, not the video — this exposes what you actually own.", c: "Compare to your guided version; where it's worse is your real to-do list." },
  m42b: { d: "Keep the VALUE structure identical; change only hue and temperature.", c: "Greyscale both versions — they should look near-identical.", t: "Changing values by accident when you change colours." },
  m43a: { d: "Watch how he keeps every object under one light logic.", c: "You can state the single light direction for the whole setup." },
  m43b: { d: "Set ONE light, then measure each object's height, width and tilt before drawing.", c: "Check three angles with a held pencil against the real setup.", t: "Letting poster-brain 'just draw the shape' — measure it." },
  m43c: { d: "Choose your handling mode — loose OR controlled — and stay in it.", c: "Step back 2m every 10 min; does it hold together?", t: "Switching from blended to loose mid-painting → mud." },
  m44a: { d: "Learn that edges steer the eye: hardest at the focal point.", c: "Name the hardest edge in a master image and why it's there." },
  m44b: { d: "Pre-decide which edge is hard (focal), which soft, which lost — before painting.", c: "Squint: the hard edge should grab your eye first.", t: "Painting every edge equally crisp — the universal beginner tell." },
  m61a: { d: "Reduce it to the few big shapes the design is built on.", c: "Reads as the same design at thumbnail size.", t: "Tracing tiny logo detail instead of the masses." },
  m61b: { d: "Flat, even fills and razor-clean edges — your edge-and-shape discipline test.", c: "Mirror-flip yours against the original; shape errors jump out.", t: "'It's just a poster' as licence for ragged edges." },
  m62a: { d: "Decide the chroma hierarchy — these live on ONE loud red against black/cream.", c: "Your key has one red doing the shouting, not five competing colours.", t: "Adding colours the original doesn't have." },
  m62b: { d: "Hold the diagonal thrust of the composition — that energy IS the design.", c: "Squint: does the eye shoot along the same diagonal as the original?", t: "Straightening the composition and killing the dynamism." },
  m63a: { d: "See the face as 2–3 value shapes, not eyes-nose-mouth.", c: "Squinted, your shapes match the original's light/shadow pattern.", t: "Drawing features first — the exact trap the real portraits punish." },
  m63b: { d: "Let the shape map carry it; resist rendering.", c: "Mirror-flip — the shape design should still read.", t: "Smoothing toward realism and losing the graphic punch." },
  m71a: { d: "Watch how he pushes distance back with lower contrast, not more detail.", c: "Identify which values he compresses for distance." },
  m71b: { d: "Keep the far plane's value range narrow on purpose.", c: "Greyscale: the foreground should have the widest value spread.", t: "Adding crisp distant detail and flattening the depth." },
  m72a: { d: "Note how sky and water share a value relationship.", c: "You can state which is lighter and why." },
  m72b: { d: "Build the gradient in deliberate value steps, THEN soften the joins.", c: "Tilt to light — no banding; greyscale shows a smooth ramp.", t: "Blending wet-on-wet to mud instead of stepping then softening." },
  m81a: { d: "Reverse-engineer the master's DESIGN — why the shapes sit where they do.", c: "Your notan should match the master's big value pattern." },
  m81b: { d: "Big shapes only; resist all detail until the masses are right.", c: "Greyscale against the master at the block-in stage.", t: "Jumping to a nice detail and locking in a wrong mass." },
  m81c: { d: "Match the master's value RELATIONSHIPS, not its absolute darkness.", c: "Side-by-side greyscale; the pattern should mirror." },
  m82a: { d: "Identify the master's chroma hierarchy and temperature scheme.", c: "Name the one or two highest-chroma spots." },
  m82b: { d: "Match each colour RELATIVE to its neighbour, not in isolation.", c: "Compare adjacent passages, not single swatches.", t: "Colour-picking locals that look right alone but wrong together." },
  m91a: { d: "Build the head as 3D forms (ball + plane), not a face outline.", c: "Could you redraw this construction at another angle?" },
  m91b: { d: "Measure YOUR subject's proportions — likeness lives here, not in features.", c: "Check the big landmarks (eyeline, nose base, mouth) by measuring against the photo.", t: "Drawing 'eyes-nose-mouth' early and chasing likeness through features." },
  m91c: { d: "Fit each feature onto the planes of the form you built.", c: "Mirror-flip the drawing; placement errors show instantly.", t: "Rendering an eyelash before the eye socket sits correctly." },
  m92a: { d: "Paint value ONLY — prove the likeness reads with zero colour.", c: "Greyscale the reference; your masses must match before any colour thought.", t: "Reaching for skin colour to fix a problem that's actually value." },
  m101a: { d: "Learn that skin is mostly muted, with small saturated accents (cheeks, lips, ears).", c: "You can point to where skin is most vs least saturated." },
  m101b: { d: "Pre-mix a light→shadow string so you're not chasing colour mid-portrait.", c: "Lay the string in order; the value steps should be even.", t: "Mixing each skin note from scratch as you go and losing consistency." },
  m102a: { d: "Build the value structure first; commit to one handling mode.", c: "Greyscale-check at block-in before any 'skin colour'." },
  m102b: { d: "Apply chroma hierarchy: save your strongest colour for the focal accents.", c: "Squint — is the loudest colour where you want the eye?", t: "Uniformly rosy skin everywhere." },
  m103a: { d: "Note his sequence and its decision points (photograph, measure, block, flesh).", c: "List the order without looking." },
  m103b: { d: "Likeness via proportion — lock the map before features.", c: "Mirror-flip AND greyscale at the drawing and block-in stages.", t: "Letting a 'good' eye seduce you before the skull is right." },
  m111a: { d: "Treat drawing as measurement; trust the ruler over the eye.", c: "Re-measure one drawing and count your landmark errors." },
  m111b: { d: "Apply comparative measuring to a real face, end to end.", c: "Mirror-flip; landmark drift is your score." },
  m112a: { d: "Note the shadow family stays unified — no detail breaks the shadow mass.", c: "You can explain 'keep the shadows simple'." },
  m112b: { d: "One light, unified shadow shape, value only.", c: "Greyscale match; the shadow should read as one connected shape.", t: "Putting 'interesting' lights inside the shadow and fragmenting it." },
  m113a: { d: "Watch how he holds the big relationships through the whole process.", c: "Name his first three moves." },
  m113b: { d: "Refine toward the focal point; deliberately leave the rest quieter.", c: "Step back 3m — does the eye go where you intended?", t: "Rendering everything to the same finish and killing focus." },
  m121a: { d: "Shoot a single-light reference; measure her proportions before any paint.", c: "Mirror-flip the drawing — if it doesn't look like her flipped, fix the map.", t: "Painting from a flat, even-light snapshot with no form to read." },
  m121b: { d: "Get the whole likeness in value alone first.", c: "Greyscale her photo and match the masses before colour.", t: "Rushing to skin tone just to feel progress." },
  m121c: { d: "Glaze/scumble colour over correct value; keep chroma hierarchy (focal eye/cheek loudest).", c: "Step back + greyscale — colour mustn't have wrecked the value map.", t: "Over-blending into a plastic, even, mud-skinned look." },
  m122a: { d: "Repeat the full deliberate process from memory — this builds ownership.", c: "Compare to the GF portrait; faster with equal accuracy = real progress." },
  m122b: { d: "Design the composition (value + chroma hierarchy) before rendering either face.", c: "Notan the whole canvas first; both heads should sit in one design.", t: "Painting two separate portraits stuck side by side." },
  m123a: { d: "Set ONE deliberate goal for each week's small painting (an edge, a temperature, a likeness).", c: "Write the goal before, grade yourself after.", t: "'Just painting' with no target — the fast track back to a plateau." },
};

// homework: 3+ quick reps per session. Anti-perfectionism applies — small, fast, good-enough, move on.
const HW = {
  m11a: ["Re-lay your palette from memory, timed under 60 seconds", "Make a labelled swatch sheet of every tube you own", "Reset and clean your palette at the end of 3 sessions to lock the ritual"],
  m11b: ["Paint a swatch, photograph it wet, then again dry — log the value/colour shift", "Test retarder vs none on two identical blends; note the extra working time", "Write your one-line plan for fighting fast drying"],
  m12a: ["Paint a 5-step scale, then a 9-step, then a 7-step", "A value scale in a single hue (blue to white to black)", "Sample 5 greys you actually see in a photo and paint them", "Greyscale-check all three and fix any doubled steps"],
  m12b: ["3 flat squares in 3 colours, zero streaks", "3 two-colour blends (warm-cool, light-dark, complementary)", "One strip: flat colour on one half, a smooth blend on the other"],
  m12c: ["A sampler sheet: drybrush, glaze, scumble side by side, twice", "Drybrush texture over a dry flat ground in 3 colours", "One small abstract using only those 3 marks"],
  m21a: ["Pencil the 5 light zones on 3 different rounded objects", "Photograph a lit egg or ball and label the zones on the print", "Diagram the zones for a top-lit vs side-lit sphere from memory"],
  m21b: ["Find and mark reflected light in 3 reference photos", "Paint a grey sphere with reflected light deliberately too bright, then correct it", "One sphere with the light coming from a different direction"],
  m22a: ["Measured pencil block-ins of 3 different objects (angles + cast-shadow ellipse only)", "The same object block-in from 2 viewpoints", "A block-in where you check every angle with a held pencil and mark corrections"],
  m22b: ["Grisaille 3 single objects, one light each", "The same object under 2 light directions", "A grisaille from a black-and-white photo", "Greyscale-match one against its reference and note the biggest error"],
  m23a: ["5 notans reducing random photos to 2 values, 2 minutes each", "Re-notan one image at 3 thresholds; pick the strongest", "Notan a famous painting and a snapshot; compare the designs"],
  m23b: ["5 more two-value notans from your own photos", "3 notan studies of the same shots, 3 values each", "Notan one scene then crop it 3 ways for a better design", "Shrink each to thumbnail size and bin the ones that go muddy"],
  m31a: ["Name-vs-see test: write the colour you'd name for 5 spots in a photo, then mix what you actually see", "Match 3 colours you usually get wrong (shadow on white, foliage green, a skin midtone)", "Mix a grey that reads warm and one that reads cool"],
  m31b: ["Match 6 colours from each of 3 photos — value, then temperature, then chroma", "Match one object's local colour in 5 steps from light to shadow", "Match 4 hard colours (neon, sunset, deep shadow, muted earth)", "Lay every match beside its target and squint"],
  m32a: ["Repeat the chart with a different 3-pigment trio", "Mix the widest range of greens you can from the trio", "Mix 5 useful neutrals (warm grey, cool grey, etc.)"],
  m32b: ["Mute 4 bright colours each with its complement, no black", "Take one hue and mix 4 chroma levels of it", "Match 3 muted colours from a photo (olive, dusty pink, slate)"],
  m33a: ["Mark warm-light / cool-shadow (or the reverse) in 3 master images", "Mix a warm and a cool version of the same hue", "Find a value-identical warm/cool pair"],
  m33b: ["Paint 3 simple objects with a decided light temperature", "The same object with the temperature scheme flipped", "A one-hue study: warm light, cool shadow"],
  m41a: ["Measured draw-outs of 3 simple setups", "Tonal-ground + draw 2 single objects", "Re-draw the cherry composition from a new angle"],
  m41b: ["Build form on 2 single objects, calling out each value zone", "The cherry painted in value only (one dark + white)", "One object with the modelling deliberately exaggerated"],
  m41c: ["Finish 2 small studies using exactly 1 deliberate glaze each", "Glaze to shift a shadow's temperature on a dried study", "Add one glaze to a flat study and log what it changed"],
  m42a: ["3 small fruit studies solo, no video", "The same fruit against 3 different backgrounds", "A 2-object solo study"],
  m42b: ["Paint one object in 3 palettes with value held constant", "Greyscale-match all 3 to prove value didn't move", "3 colour variations of one simple shape, value held constant"],
  m43a: ["Identify the single light direction in 3 multi-object photos", "Notan one multi-object setup", "Plan a 4-object arrangement on paper"],
  m43b: ["Measured underdrawings of 3 of your own setups", "Draw 10 ellipses on real cups/bowls at different tilts", "Measure one setup from 2 distances and compare"],
  m43c: ["3 of your own multi-object still lifes, one handling mode each", "The same setup loose vs controlled (2 versions)", "A 5-object still life with reflected light marked"],
  m44a: ["Mark hardest / softest / lost edges in 3 master portraits", "Find lost edges (object meeting shadow) in 3 photos", "Diagram where you'd harden edges for a chosen focal point"],
  m44b: ["Paint 3 objects, each with a pre-decided edge map", "One object twice: all-hard vs varied edges — compare the focus", "A sphere with a lost edge into its cast shadow", "Squint-check each: does the hard edge grab the eye first?"],
  m61a: ["Notan 3 mid-century ads (Pan Am globe, Air France, British Rail)", "Notan the Bitter Campari robot figure to its shapes", "Notan one of them again at 2 thresholds; keep the cleaner design"],
  m61b: ["Flat repro of the Pan Am globe in 3 colours", "Flat repro of the MUJI walking figure (silhouette + 1 accent)", "The Aperol Spritz glass as flat shapes", "One ad mirror-flip-checked against the original"],
  m62a: ["Notan 3 Constructivist pins (к Марсу, ВПЕРЁД, the oil derrick)", "Colour-key each in red / black / cream only", "In each notan, mark the single dominant diagonal the design is built on"],
  m62b: ["Paint the 'к Марсу' rocket in 3 colours", "Paint Rodchenko's 'Books' figure as flat shapes", "Repaint one's background diagonal until the energy reads"],
  m63a: ["Notan the Rodchenko portrait into 2 then 3 value shapes", "Notan the 'Books' shouting woman's face into shapes", "Find the single shape that reads as the face in each"],
  m63b: ["Paint the Rodchenko portrait as flat value shapes", "Paint the shouting woman's head, shapes only", "Mirror-flip one and fix any shape that drifts"],
  m71a: ["Identify value compression in 3 landscape photos", "Greyscale 3 landscapes and rank their depth cues", "Sketch a 3-plane depth diagram"],
  m71b: ["Reproduce the Hasui snow-mountain woodblock, value first", "Reproduce the sunset-harbour pin: keep the distant plane low in value contrast", "A foggy version of either (maximum value compression)"],
  m72a: ["Note the sky/water value relationship in 3 references", "Sketch 3 horizon compositions", "Mark the lightest and darkest note in 3 seascapes"],
  m72b: ["Reproduce the Hokusai Great Wave: the water as big simplified shapes", "Reproduce the Hopper-like night house-by-water pin — mood from value, not detail", "One sky study, stepped-then-softened gradient"],
  m81a: ["Notan a Rockwell Kent engraving from your board into 3 values", "Notan 2 more simple-value masters (Sargent, Sorolla)", "Compare two masters' value designs"],
  m81b: ["Value block-ins of 3 masters, no detail", "One master blocked at 3 different sizes", "A block-in greyscale-checked against the master"],
  m81c: ["3 monochrome master copies (relationships, not absolute dark)", "The same master in a high key and a low key", "A monochrome copy translated from a colour master"],
  m82a: ["Colour-key 3 masters; mark chroma peaks + temperature", "Compare two masters' colour schemes", "Key one master using a limited palette"],
  m82b: ["3 colour master copies matching relationships", "One copy using only adjacent-passage checking", "A small time-boxed colour copy"],
  m91a: ["Construct 3 heads from photos of people you'd like to paint (future underdrawings)", "The same person's head at 2 angles", "One head with the proportional landmarks measured and marked"],
  m91b: ["Construct 3 different real faces, measured", "The same face at 2 angles", "One face mirror-flip-checked for drift", "A face where you place the eyeline, nose base and mouth purely by measuring"],
  m91c: ["Place features onto 3 of your constructed heads", "Study eyes across 3 faces, always on the form", "Mirror-flip-correct one head's feature placement"],
  m92a: ["3 grisaille heads over your constructions", "The same head under 2 light directions", "A grisaille from a black-and-white photo"],
  m101a: ["Mark most/least saturated skin areas on 3 face photos", "Mix the midtone for 3 different complexions", "Identify the accent (cheek/lip/ear) chroma in 3 portraits"],
  m101b: ["Mix full skin strings for 3 complexions", "One string light-to-shadow with even, checked steps", "A cooler, muted shadow-family string", "Lay one string in order and greyscale-check the value spacing"],
  m102a: ["2 more small head paintings, value-first", "One head, block-in only, then stop", "A head from the same reference, faster"],
  m102b: ["2 portraits applying a chroma hierarchy", "One portrait with the loudest colour misplaced, then corrected", "A head with muted skin and a single accent"],
  m103a: ["Write the process steps from memory, then shoot 3 references following his lighting tips", "Plan 3 portraits start-to-finish on paper", "Critique a finished portrait against his steps"],
  m103b: ["3 portraits from stock photos, proportion locked first", "The same photo with mirror-flip + greyscale checks at each stage", "A time-boxed head prioritising the map over features", "A fourth head once the proportion errors shrink"],
  m111a: ["3 measured drawings, counting your landmark errors each time", "Re-measure one drawing and correct it", "A drawing done comparative / sight-size"],
  m111b: ["3 measured portrait drawings from photos", "One drawing mirror-flip-corrected", "The same face drawn twice, improving accuracy"],
  m112a: ["Identify the unified shadow shape in 3 master heads", "Mark where detail wrongly breaks a shadow in a weaker work", "Diagram one head's shadow family"],
  m112b: ["3 monochrome heads: one light, unified shadow", "The same head with the shadow kept even simpler", "A head where you resist all in-shadow detail"],
  m113a: ["Replicate his opening block-in 3 times", "Plan a portrait-from-life setup (lighting, distance, pose)", "Observe a sitter and thumbnail the big shapes"],
  m113b: ["Finish 3 portraits, refining only toward the focal point", "One portrait with the periphery left deliberately loose", "A time-boxed portrait to force decisive finishing"],
  m121a: ["Shoot 3 single-light reference sets of her; pick the best", "A measured drawing of her, mirror-flip-checked", "2 notan + colour-key options for the composition"],
  m121b: ["Grisaille her likeness in value alone", "A second value study at a different size", "Greyscale-match against her photo and fix the masses"],
  m121c: ["A small colour test of her skin string first", "Colour passes over the grisaille, chroma hierarchy held", "Final step-back + greyscale check, then STOP"],
  m122a: ["3 family-member portraits from photos", "The same family member painted twice, sessions apart, then compared", "A quick likeness study of each family member"],
  m122b: ["Notan then paint a 2-person composition", "2 thumbnails of group arrangements", "A small 2-head study"],
  m123a: ["Paint a small piece this week with ONE written goal", "Vary the subject across 3 weeks (still life, landscape, head)", "Grade each against its goal in the notes"],
};
const HW_IDS = Object.entries(HW).flatMap(([sid, arr]) => arr.map((_, i) => sid + "h" + i));

const ALL = STAGES.flatMap((s) => s.milestones.flatMap((m) => m.sessions.map((x) => x.id)));
const KEY = "acrylic-curriculum-v3";

// Persistence: prefer Claude's window.storage when present (the artifact sandbox blocks
// localStorage); otherwise fall back to localStorage so it persists when run anywhere else.
const store = {
  async get(key) {
    try { if (typeof window !== "undefined" && window.storage && window.storage.get) return await window.storage.get(key); } catch {}
    try { const value = localStorage.getItem(key); return value == null ? null : { key, value }; } catch { return null; }
  },
  async set(key, value) {
    try { if (typeof window !== "undefined" && window.storage && window.storage.set) return await window.storage.set(key, value); } catch {}
    try { localStorage.setItem(key, value); return { key, value }; } catch { return null; }
  },
};
const RANKS = ["Primed Canvas", "First Strokes", "Value Hunter", "Colour Mixer", "Still-Life Hand", "Sharp Eye", "Poster Painter", "Plein-Air Dabbler", "Master Copyist", "Head Constructor", "Flesh & Blood", "Atelier Apprentice", "Portraitist"];
const COST = {
  free: { bg: "#e7f0e7", fg: "#3f6b3f", t: "FREE" },
  paid: { bg: "#f6ead2", fg: "#8a6420", t: "PAID" },
  book: { bg: "#ece6dd", fg: "#6b5d49", t: "BOOK" },
};
const dstr = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
function streakOf(days) {
  const active = new Set(Object.keys(days).filter((k) => days[k] > 0));
  if (!active.size) return 0;
  let d = new Date(), cur = dstr(d), n = 0;
  if (!active.has(cur)) { d.setDate(d.getDate() - 1); cur = dstr(d); if (!active.has(cur)) return 0; }
  while (active.has(cur)) { n++; d.setDate(d.getDate() - 1); cur = dstr(d); }
  return n;
}

export default function App() {
  const [done, setDone] = useState({});
  const [days, setDays] = useState({});
  const [notes, setNotes] = useState({});
  const [open, setOpen] = useState({});
  const [target, setTarget] = useState(1);
  const [showRef, setShowRef] = useState(false);
  const [showStart, setShowStart] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { (async () => {
    try { const r = await store.get(KEY); if (r?.value) { const d = JSON.parse(r.value);
      setDone(d.done || {}); setDays(d.days || {}); setNotes(d.notes || {}); setTarget(d.target || 1); } }
    catch { /* first run */ } setLoaded(true);
  })(); }, []);

  const save = (nd, nday, nn, nt) => { try { store.set(KEY, JSON.stringify({ done: nd, days: nday, notes: nn, target: nt })); } catch {} };

  const toggle = (id) => {
    const was = !!done[id];
    const nd = { ...done, [id]: !was };
    const today = dstr();
    const nday = { ...days, [today]: Math.max(0, (days[today] || 0) + (was ? -1 : 1)) };
    setDone(nd); setDays(nday); save(nd, nday, notes, target);
  };
  const setNote = (id, val) => { const nn = { ...notes, [id]: val }; setNotes(nn); save(done, days, nn, target); };
  const pickTarget = (t) => { setTarget(t); save(done, days, notes, t); };

  const doneCount = ALL.filter((id) => done[id]).length;
  const hwDone = HW_IDS.filter((id) => done[id]).length;
  const pct = Math.round((doneCount / ALL.length) * 100);
  const xp = (doneCount + hwDone) * 10;
  const lvl = Math.min(Math.floor(doneCount / 6), RANKS.length - 1);
  const toNext = 6 - (doneCount % 6);
  const streak = streakOf(days);
  const todayCount = days[dstr()] || 0;
  const targetMet = target === 99 ? todayCount > 0 : todayCount >= target;
  const nextId = ALL.find((id) => !done[id]);

  const jump = (mid) => { setOpen((o) => ({ ...o, [mid]: true })); setTimeout(() => document.getElementById(mid)?.scrollIntoView({ behavior: "smooth", block: "center" }), 60); };

  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif" }} className="min-h-screen w-full bg-stone-50 text-stone-800">
      <div className="max-w-3xl mx-auto px-5 py-10">
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-stone-900 leading-tight">Acrylics → Classical Portraits</h1>
          <p className="text-stone-600 mt-2 text-sm leading-relaxed">
            {STAGES.length} stages, {STAGES.reduce((a, s) => a + s.milestones.length, 0)} milestones, {ALL.length} sessions — beginner to a real portrait of the people you love.
            Every session has a video, and pencil work only ever appears as the underdrawing for a painting you're about to do — never abstract drills. Do one a day or binge a stage; nothing is locked.
          </p>
        </header>

        {!loaded && <p className="text-stone-400 text-sm">Loading…</p>}

        {loaded && <>
          {/* ---- start here launch plan ---- */}
          <div className="rounded-xl mb-8 overflow-hidden" style={{ border: "2px solid #a8763e", background: "#fbf6ee" }}>
            <button onClick={() => setShowStart(!showStart)} className="w-full flex items-center justify-between p-5 text-left">
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#a8763e" }}>Start here — launch plan</span>
              {showStart ? <ChevronDown size={18} style={{ color: "#a8763e" }} /> : <ChevronRight size={18} style={{ color: "#a8763e" }} />}
            </button>
            {showStart && (
              <div className="px-5 pb-5 space-y-4 text-sm text-stone-700">
                <div>
                  <div className="font-bold text-stone-900 mb-1">Tonight (the urgent one)</div>
                  <p className="leading-relaxed">Check your order is more than paint. To paint Monday you also need brushes, a surface (canvas paper or cheap boards), something to mix on, two water jars and a rag. If it's paint-only, add the missing bits now — that's the one thing that can sink day one. Then set your daily goal below.</p>
                </div>
                <div>
                  <div className="font-bold text-stone-900 mb-1">Sunday — no paint needed, clear the runway</div>
                  <ul className="space-y-1 leading-relaxed">
                    <li>Watch &amp; tick: the acrylic overview (Stage 1) and sphere theory + 5 elements of light (Stage 2). Pure theory.</li>
                    <li>Pencil only: the apple block-in, plus a few notan thumbnails with a marker. No paint required — and they count.</li>
                    <li>Set up your space: prop a board near-vertical against some books; DIY a stay-wet palette (sealed tub + damp paper towel + baking paper).</li>
                    <li>Find your phone's black-and-white filter (your greyscale test) and put a simple object — egg, apple, mug — under one lamp for later.</li>
                  </ul>
                  <p className="text-xs text-stone-500 mt-1">Do these and you start Monday with a 1-day streak and the runway cleared. Don't add scope — Sunday's only job is to remove Monday's friction.</p>
                </div>
                <div>
                  <div className="font-bold text-stone-900 mb-1">Monday — paint lands, no planning, just go</div>
                  <ul className="space-y-1 leading-relaxed">
                    <li>1. Lay out your palette (5 min).</li>
                    <li>2. Paint a 9-step value scale — your first painting. It will be ugly; that's correct. Greyscale-test it.</li>
                    <li>3. Still keen? Flat coverage + one blend.</li>
                  </ul>
                  <p className="text-xs text-stone-500 mt-1">Then let the Next-up below carry you, 1–2 sessions a day. Collapse this panel once you're rolling.</p>
                </div>
              </div>
            )}
          </div>

          {/* ---- gamified dashboard ---- */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 mb-8 shadow-sm">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-stone-400">Level {lvl + 1}</div>
                <div className="text-2xl font-bold" style={{ color: "#a8763e" }}>{RANKS[lvl]}</div>
                <div className="text-xs text-stone-500 mt-1">{xp} XP · {doneCount === ALL.length ? "course complete!" : `${toNext} session${toNext > 1 ? "s" : ""} to level up`}</div>
              </div>
              <div className="flex items-center gap-5">
                <div className="text-center">
                  <div className="flex items-center gap-1 text-2xl font-bold" style={{ color: streak ? "#d4731f" : "#cfcabf" }}>
                    <Flame size={22} /> {streak}
                  </div>
                  <div className="text-[10px] uppercase tracking-wide text-stone-400">day streak</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-stone-800">{pct}%</div>
                  <div className="text-[10px] uppercase tracking-wide text-stone-400">complete</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: "#5a7d5a" }}>{hwDone}</div>
                  <div className="text-[10px] uppercase tracking-wide text-stone-400">pieces</div>
                </div>
              </div>
            </div>

            {/* level progress */}
            <div className="h-2 w-full bg-stone-200 rounded-full overflow-hidden mt-4">
              <div className="h-full rounded-full transition-all duration-500" style={{ width: `${((doneCount % 6) / 6) * 100}%`, backgroundColor: "#a8763e" }} />
            </div>

            {/* daily target */}
            <div className="mt-5 flex items-center justify-between flex-wrap gap-3 border-t border-stone-100 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <Target size={16} className="text-stone-400" />
                <span className="text-stone-600">Today: <b>{todayCount}</b>{target !== 99 && <> / {target}</>} {targetMet && <span style={{ color: "#3f6b3f" }}>✓ done for today</span>}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-stone-400 mr-1">daily goal:</span>
                {[["1/day", 1], ["3/day", 3], ["Binge", 99]].map(([lab, t]) => (
                  <button key={t} onClick={() => pickTarget(t)} className="text-xs px-2.5 py-1 rounded-full border transition-colors"
                    style={target === t ? { background: "#a8763e", color: "white", borderColor: "#a8763e" } : { background: "white", color: "#78716c", borderColor: "#e7e5e4" }}>
                    {lab}
                  </button>
                ))}
              </div>
            </div>

            {/* next up */}
            {nextId && (() => {
              const ms = STAGES.flatMap((s) => s.milestones).find((m) => m.sessions.some((x) => x.id === nextId));
              const ss = ms.sessions.find((x) => x.id === nextId);
              return (
                <div className="mt-4 flex items-start gap-3 p-3 rounded-lg" style={{ background: "#fbf6ee", border: "1px solid #ecd9bb" }}>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-0.5">Next up</div>
                    <div className="text-sm text-stone-700">{ss.do}</div>
                  </div>
                  <button onClick={() => jump(ms.id)} className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: "#a8763e", color: "white" }}>Go →</button>
                </div>
              );
            })()}

            {/* stage badges */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {STAGES.map((s, i) => {
                const ids = s.milestones.flatMap((m) => m.sessions.map((x) => x.id));
                const complete = ids.every((id) => done[id]);
                return (
                  <span key={s.id} title={s.name}
                    className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-full"
                    style={complete ? { background: s.accent, color: "white" } : { background: "#f5f5f4", color: "#a8a29e" }}>
                    {complete ? <Trophy size={11} /> : <Lock size={10} />} {i + 1}
                  </span>
                );
              })}
            </div>
          </div>

          {/* ---- deliberate practice house rules ---- */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 mb-8">
            <div className="text-xs uppercase tracking-widest text-stone-400 mb-2">House rules — make it deliberate</div>
            <p className="text-sm text-stone-600 leading-relaxed mb-3">
              Every session is <b>decide → do → check</b>. Painting until it "looks okay" is the accidental trap; setting a target and testing against it is the practice. Each session below names what to <b>decide</b>, how to <b>check</b>, and the autopilot mistake to <b>avoid</b>.
            </p>
            <ul className="text-sm text-stone-600 space-y-1.5">
              <li><b style={{ color: "#a8763e" }}>Value test:</b> photograph your painting and the reference, desaturate both, compare. This is your teacher-in-the-room.</li>
              <li><b style={{ color: "#a8763e" }}>Drawing test:</b> mirror-flip the image to expose errors; measure angles, don't eyeball.</li>
              <li><b style={{ color: "#a8763e" }}>Set-up:</b> paint on a near-vertical surface and step back every few minutes.</li>
              <li><b style={{ color: "#a8763e" }}>One decision per painting:</b> pick your handling (loose vs controlled) and chroma hierarchy (where the loudest colour goes) before you start — and hold it.</li>
              <li><b style={{ color: "#a8763e" }}>Chroma is a tool:</b> crank it on purpose at focal points; mute elsewhere with a complement, never with black.</li>
              <li><b style={{ color: "#a8763e" }}>Homework:</b> each session has 3+ quick pieces to solidify it. Optional but rewarded (XP + your pieces count) — same rules apply: small, fast, good-enough, move on.</li>
            </ul>
          </div>

          {/* ---- anti-patterns ---- */}
          <div className="bg-white border rounded-xl p-5 mb-8" style={{ borderColor: "#e6d3c8" }}>
            <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "#9a5b3f" }}>What to avoid in lessons</div>
            <ul className="text-sm text-stone-600 space-y-2">
              <li><b style={{ color: "#9a5b3f" }}>Perfectionism:</b> once the Check passes, STOP — even if you can see flaws. A study that taught its lesson is finished. Save the polish for your own hobby pieces and the capstone portraits, which sit off this ladder and are where you DO finish.</li>
              <li><b style={{ color: "#9a5b3f" }}>Reworking over redoing:</b> five fresh attempts beat one painting fixed twenty times. Mileage builds skill; polish doesn't.</li>
              <li><b style={{ color: "#9a5b3f" }}>Detail before structure:</b> no rendering — eyelashes, leaves, highlights — until value and proportion masses are right.</li>
              <li><b style={{ color: "#9a5b3f" }}>Going small and fiddly:</b> use a bigger brush and surface than feels comfortable; it forces mass decisions instead of fussing.</li>
              <li><b style={{ color: "#9a5b3f" }}>Passive watching:</b> never finish a video without painting from it. A lesson you didn't act on taught you nothing.</li>
              <li><b style={{ color: "#9a5b3f" }}>Comparison spiral:</b> measure against your own last painting, not pros or strangers online. Bad paintings are rungs on the ladder, not verdicts.</li>
              <li><b style={{ color: "#9a5b3f" }}>Precious-surface freeze:</b> cheap supports, paint over failures. Nothing in the lessons is precious.</li>
              <li><b style={{ color: "#9a5b3f" }}>Comfort-zone reps:</b> aim at what you're currently bad at, not what already feels good — that's where the Decide/Check targets point.</li>
            </ul>
          </div>
          {/* ---- toolkit & reference ---- */}
          <div className="bg-white border border-stone-200 rounded-xl mb-8 overflow-hidden">
            <button onClick={() => setShowRef(!showRef)} className="w-full flex items-center justify-between p-5 text-left">
              <span className="text-xs uppercase tracking-widest text-stone-400">Toolkit & reference</span>
              {showRef ? <ChevronDown size={18} className="text-stone-400" /> : <ChevronRight size={18} className="text-stone-400" />}
            </button>
            {showRef && (
              <div className="px-5 pb-5 space-y-5 text-sm text-stone-600">
                <div>
                  <div className="font-bold text-stone-800 mb-1.5">Starter kit — buy small, expand only when a mix is truly impossible</div>
                  <ul className="space-y-1">
                    <li><b>Starter palette:</b> Titanium White, Ultramarine Blue, a warm red (Cadmium/Naphthol), a warm yellow (Cadmium/Hansa), Burnt Sienna. Five tubes reach most colours.</li>
                    <li><b>Portrait (Zorn) palette, for Stage 9+:</b> Ivory Black, Titanium White, Yellow Ochre, Cadmium Red — four tubes that mix believable skin.</li>
                    <li><b>Fight fast drying:</b> a stay-wet palette, plus Golden OPEN acrylics or a retarder medium for blends and portraits.</li>
                    <li><b>Brushes:</b> a small + medium flat, one round, one filbert — go a size bigger than feels comfortable.</li>
                    <li><b>Surfaces:</b> cheap primed boards / canvas paper, lots of them. Nothing precious; paint over failures.</li>
                    <li><b>Also:</b> a palette knife (mix with it), two water jars, a rag, and your phone for greyscale checks.</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-stone-800 mb-1.5">Where to find reference</div>
                  <ul className="space-y-1">
                    <li><b>General photos (free, no permission):</b> <a className="underline decoration-stone-300" target="_blank" rel="noopener noreferrer" href="https://unsplash.com">Unsplash</a> and <a className="underline decoration-stone-300" target="_blank" rel="noopener noreferrer" href="https://www.pexels.com">Pexels</a>.</li>
                    <li><b>Master copies (high-res, public domain):</b> the <a className="underline decoration-stone-300" target="_blank" rel="noopener noreferrer" href="https://www.metmuseum.org/art/collection">Met</a>, <a className="underline decoration-stone-300" target="_blank" rel="noopener noreferrer" href="https://www.artic.edu/collection">Art Institute of Chicago</a>, <a className="underline decoration-stone-300" target="_blank" rel="noopener noreferrer" href="https://www.rijksmuseum.nl/en/rijksstudio">Rijksmuseum</a>.</li>
                    <li><b>Posters & landscapes:</b> your own Pinterest board.</li>
                    <li><b>Portraits:</b> shoot your own — ONE directional light (a window or single lamp), neutral background, high resolution. A flat, evenly-lit phone snap has no form to paint.</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-stone-800 mb-1.5">Diagnostic — "why does it look off?"</div>
                  <ul className="space-y-1">
                    <li><b>Flat / lifeless</b> → value range too narrow. Push your darkest dark and lightest light further apart (greyscale test).</li>
                    <li><b>Muddy</b> → too many mixes, or chroma everywhere. Limit the palette; mute with a complement, not black; mix less.</li>
                    <li><b>Amateur / cut-out</b> → every edge equally hard. Soften or lose all but the focal edges.</li>
                    <li><b>Doesn't look like them</b> → proportion, not features. Re-measure the big landmarks and mirror-flip.</li>
                    <li><b>Colours don't sit together</b> → you matched locals in isolation. Judge each colour against its neighbour.</li>
                    <li><b>Too loud / no focus</b> → no chroma hierarchy. Pull saturation back everywhere except the focal point.</li>
                    <li><b>Forms look pasted-on</b> → light logic ignored. Check the 5 zones; over-bright reflected light is the usual culprit.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {STAGES.map((stage, si) => {
            const ids = stage.milestones.flatMap((m) => m.sessions.map((x) => x.id));
            const dc = ids.filter((id) => done[id]).length;
            return (
              <section key={stage.id} className="mb-9">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: stage.accent }} />
                  <h2 className="text-xl font-bold text-stone-900">Stage {si + 1} · {stage.name}</h2>
                  <span className="text-xs text-stone-400">{dc}/{ids.length}</span>
                </div>
                <p className="text-sm text-stone-500 mb-4 ml-6 leading-relaxed">{stage.blurb}</p>

                <div className="space-y-3">
                  {stage.milestones.map((m) => {
                    const mids = m.sessions.map((x) => x.id);
                    const md = mids.filter((id) => done[id]).length;
                    const all = md === mids.length;
                    const isOpen = open[m.id] ?? mids.includes(nextId);
                    return (
                      <div id={m.id} key={m.id} className="bg-white border border-stone-200 rounded-lg overflow-hidden" style={all ? { borderColor: stage.accent } : {}}>
                        <button onClick={() => setOpen({ ...open, [m.id]: !isOpen })} className="w-full text-left flex items-center gap-3 p-4">
                          <span className="shrink-0">
                            {all
                              ? <span className="flex items-center justify-center w-6 h-6 rounded-full" style={{ background: stage.accent, color: "white" }}><Check size={15} strokeWidth={3} /></span>
                              : <span className="flex items-center justify-center w-6 h-6 rounded-full border-2 text-[10px] font-bold" style={{ borderColor: stage.accent, color: stage.accent }}>{md}/{mids.length}</span>}
                          </span>
                          <span className={`flex-1 font-bold text-stone-900 ${all ? "opacity-50" : ""}`}>{m.title}</span>
                          {isOpen ? <ChevronDown size={18} className="text-stone-400" /> : <ChevronRight size={18} className="text-stone-400" />}
                        </button>

                        {isOpen && (
                          <div className="px-4 pb-4">
                            <p className="text-xs italic text-stone-500 mb-3 ml-9">Goal: {m.goal}</p>
                            <div className="space-y-2">
                              {m.sessions.map((s, si2) => {
                                const isDone = !!done[s.id], isNext = s.id === nextId, c = COST[s.watch.cost];
                                return (
                                  <div key={s.id} className="flex items-start gap-3 p-3 rounded-md"
                                    style={{ background: isNext ? "#fbf6ee" : "#fafaf9", border: isNext ? `1px solid ${stage.accent}` : "1px solid #f0efed" }}>
                                    <button onClick={() => toggle(s.id)} className="mt-0.5 shrink-0 active:scale-90 transition-transform" aria-label="toggle">
                                      {isDone
                                        ? <span className="flex items-center justify-center w-5 h-5 rounded-full" style={{ background: stage.accent, color: "white" }}><Check size={12} strokeWidth={3} /></span>
                                        : <Circle size={20} className="text-stone-300" />}
                                    </button>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[11px] font-bold uppercase tracking-wide" style={{ color: stage.accent }}>Session {si2 + 1}</span>
                                        {isNext && <span className="text-[10px] font-bold uppercase tracking-wide text-stone-400">← next</span>}
                                        <span className="text-[10px] font-bold text-stone-300">+10 XP</span>
                                        {s.tag === "underdrawing" && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded inline-flex items-center gap-0.5" style={{ background: "#e8eef5", color: "#3e5a7a" }}>✏ feeds the painting</span>}
                                      </div>
                                      <p className={`text-sm text-stone-700 leading-relaxed ${isDone ? "line-through opacity-50" : ""}`}>{s.do}</p>
                                      {FOCUS[s.id] && (
                                        <div className="mt-1.5 text-xs leading-relaxed rounded-md px-2.5 py-2" style={{ background: "#f4f1ea", border: "1px solid #ece6d8" }}>
                                          <div><span className="font-bold" style={{ color: stage.accent }}>🎯 Decide:</span> <span className="text-stone-600">{FOCUS[s.id].d}</span></div>
                                          <div className="mt-0.5"><span className="font-bold" style={{ color: "#3e5a7a" }}>🔍 Check:</span> <span className="text-stone-600">{FOCUS[s.id].c}</span></div>
                                          {FOCUS[s.id].t && <div className="mt-0.5"><span className="font-bold" style={{ color: "#9a5b3f" }}>⚠ Avoid:</span> <span className="text-stone-600">{FOCUS[s.id].t}</span></div>}
                                        </div>
                                      )}
                                      <div className="mt-1.5 flex flex-col gap-1">
                                        {[s.watch, ...(s.more || []), ...(s.alt ? [s.alt] : [])].map((r, ri) => {
                                          const rc = COST[r.cost];
                                          const isAlt = s.alt && r === s.alt;
                                          return (
                                            <div key={ri} className="flex items-center gap-2 flex-wrap">
                                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ background: rc.bg, color: rc.fg }}>{isAlt ? rc.t + " ALT" : rc.t}</span>
                                              <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-xs text-stone-600 underline decoration-stone-300 hover:decoration-stone-600 inline-flex items-center gap-1">
                                                <Play size={11} /> {r.label}
                                              </a>
                                            </div>
                                          );
                                        })}
                                      </div>
                                      {HW[s.id] && (
                                        <div className="mt-2 pl-2.5" style={{ borderLeft: `2px solid ${stage.accent}40` }}>
                                          <div className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Homework — solidify it (+10 XP each)</div>
                                          <div className="space-y-1">
                                            {HW[s.id].map((hwText, hi) => {
                                              const hid = s.id + "h" + hi;
                                              const hd = !!done[hid];
                                              return (
                                                <button key={hid} onClick={() => toggle(hid)} className="w-full text-left flex items-start gap-2">
                                                  <span className="mt-0.5 shrink-0">
                                                    {hd
                                                      ? <span className="flex items-center justify-center w-4 h-4 rounded-sm" style={{ background: stage.accent, color: "white" }}><Check size={10} strokeWidth={3} /></span>
                                                      : <span className="block w-4 h-4 rounded-sm border-2 border-stone-300" />}
                                                  </span>
                                                  <span className={`text-xs text-stone-600 leading-snug ${hd ? "line-through opacity-50" : ""}`}>{hwText}</span>
                                                </button>
                                              );
                                            })}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            <div className="mt-3 ml-9">
                              <textarea value={notes[m.id] || ""} onChange={(e) => setNote(m.id, e.target.value)} rows={2}
                                placeholder="Notes: what worked, what to fix next time…"
                                className="w-full p-2 text-sm bg-stone-50 border border-stone-200 rounded resize-y focus:outline-none focus:border-stone-400" style={{ fontFamily: "inherit" }} />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}

          <footer className="text-xs text-stone-400 text-center pt-4 border-t border-stone-200 leading-relaxed">
            Every session has a free resource; PAID ALT links are optional upgrades (mostly Ken Goshen's Patreon for the classical stages).
            If a deep link 404s, the video still exists — search its title on the same site. Progress saves automatically.
          </footer>
        </>}
      </div>
    </div>
  );
}
