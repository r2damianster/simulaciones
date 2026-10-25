# The Toolmaker Challenge — Presenter Notes (EN)

**Format:** facilitator script, one block per screen. Run time ≈ 15–20 min with discussion.
**Core message (say it twice, start and end):** *Generic apps always come with limits. The scarce resource isn't programming — it's knowing how to specify what you need.*
**Setup:** project the simulation, language toggle top-right (EN). Teachers play in pairs; one drives, one reads the screen aloud.

---

## 0. Welcome screen — ⏱ 1 min

**Screen:** "Try generic apps. Then build your own with AI." + name prompt.

**Say**
- "You will do three things: test ready-made apps, describe the tool you actually need, then refine it."
- "Nothing here requires coding. Everything is a decision."

**Do**
- Type a first name (it becomes the app's name later: *Quiz-Name*).

**Ask the room**
- "Think of one app you used this year for class. What did it *not* let you do?" (collect 2–3 answers on the board — you will return to them in Phase 1.)

---

## 1. Phase 1 — Pick your app — ⏱ 3 min

**Screen:** a table. Rows = your 4 needs (👥 30 students · 📊 grade per student · 📍 local context · 💲 free). Columns = KaPlay, QuizMate, PlayLearn. Cells show `?`.

**Say**
- "These are *your* four needs. Tap each app and see whether it meets them."
- Stay quiet while they tap. The table speaks for itself.

**Do**
- Have them open all three apps. Cells flip to ✓ / ✗ with a 1–2 word reason ("max. 6", "average only", "USD 12/mo").

**Point out**
- Every app scores **2/4**. Different failures, same ceiling.
- The 📍 row is ✗ for all three: "snow / NY" — the content belongs to someone else's classroom.

**Ask**
- "Which failure would hurt *you* most: the paywall, the missing individual grades, or the foreign context?"
- "Which of these limits did you list at the start?"

**Transition**
- Read the verdict aloud: *"None meets all 4. What if you build it?"* → click **Build mine**.

> 💡 If someone asks "why not just pay for PlayLearn?": it still fails on local context, and USD 12/month × every teacher × every course adds up. Cost is only one of the four walls.

---

## 2. Phase 2 — Plan B: build it yourself — ⏱ 6 min

**Screen:** a prompt builder: *What must it do?* · *For whom?* (slider) · *Local context?* · *What must it NOT do?* · *Language?* → live "Built prompt" + **Specification score**.

**Say**
- "A prompt is a specification. The AI builds exactly what you describe — no more."
- "Watch the score at the bottom. It rises as your description gets clearer."

**Do (walk through one field at a time)**
1. **What:** pick *Review quiz*, *Record grades* or *Both*.
2. **For whom:** slide to your real class size.
3. **Local context** *(multi-select)*: combine **type of institution** and **place** — e.g. *Rural school + Fishing*, *Public school + Port*, *Private school + Tourism*, *University*. "None" clears the others.
4. **NOT:** tick what the tool must never do — charge, ask for an account, use lots of data, show ads.
5. **Language:** Spanish, English or both.

**Teaching moment — context matters differently per setting**
- *Rural school:* low connectivity, shared devices, local examples (farming, fishing).
- *Public school:* large groups, no budget, curriculum constraints.
- *Private school:* more resources, but parents' data and platform lock-in.
- *University:* adult learners, research ethics, institutional LMS.
- Ask: "How would the *same* quiz change between a rural school and a private one?"

**Do**
- Try to press **Generate** with an incomplete prompt first (score ≈ 10–50). The app is generated *missing a function*. Say: "Vague prompt → vague tool."
- Click **Refine prompt**, fill the remaining fields, generate again.

**Screen — generation**
- Terminal lines: *Analyzing requirements… Generating interface… Connecting grade book… Applying name…* → **Done.** A phone preview appears with a working quiz and a grade book.
- Have someone answer the 3-question quiz and watch the grade book update.

**Ask**
- "Which field changed the result the most?"
- "What did you forget to say that the AI had to guess?"

**Transition:** *Next phase.*

---

## 3. Phase 3 — Fine-tune it — ⏱ 4 min

**Screen:** four change requests — *Grade automatically · Speak about my context · Work in Spanish and English · Form teams* — plus a version counter (v1.0).

**Say**
- "Your tool exists. Now iterate. Each request is a short, precise sentence."

**Do**
- Choose **at least 3** changes → **Apply selected changes**.
- A diff-like log appears (`> add: auto_grading();` …). The version number goes up (v1.3).

**Point out**
- The *context* request echoes what you chose in Phase 2 (e.g. `context.localize("Rural school + Fishing")`).
- If you ask for a change that contradicts your original spec (e.g. "bilingual" after choosing Spanish only), the avatar warns you. "Iterating on a good base is part of the process."

**Ask**
- "Which change would you request first in your real classroom?"
- "What would you *not* delegate to an AI tool?"

**Transition:** *Finish.*

---

## 4. Final screen — ⏱ 3 min

**Screen:** "Your app *Quiz-Name* v1.x is ready" · **Before vs. after** (generic apps ≈ 38/100 fit, high frustration → your app ≈ 90+/100, low frustration) · list of **limitations that disappeared** (paywall, ungraded messages, locked export, foreign context) · **Download app** · a closing quote.

**Say (second time)**
- "The scarce resource wasn't programming. It was specifying clearly."

**Do**
- Click **Download app**: the file is a self-contained HTML tool they can open offline.
- Open the **class guide** tab on the right edge (💬) → *After*.

**Wrap-up questions (pick 2)**
1. When is it better to adapt to an existing app and when to build your own?
2. What are the risks of building with AI (errors, privacy, maintenance)? How would you verify the tool before using it with students?
3. Write the full prompt for a tool *you* need next semester.
4. What changes in your role when you go from "app user" to "tool designer"?

---

## Troubleshooting & facilitator tips

| Situation | What to do |
|---|---|
| Someone fills nothing and presses Generate | Perfect — let it happen. Use the "missing function" result as the lesson. |
| Group asks "can AI really build this?" | Be honest: simple tools yes; always test with a few students before real use; privacy review is on you. |
| Spanish-speaking participants | Toggle **ES** (top-right) — the whole game and the class guide switch language. |
| Short on time (≈10 min) | Skip Phase 3 details: apply 3 changes without discussion, go straight to the final screen. |
| Want deeper discussion | Add the "Before" questions of the class guide *before* starting, and the "After" ones in small groups. |

## One-slide summary (for the board)

1. Generic apps → 4 needs, 3 apps, **0 perfect** matches.
2. A prompt is a **specification**: *what · who · context · limits · language*.
3. Vague spec → incomplete tool. Clear spec → complete tool.
4. Iterate in small, precise requests.
5. The teacher's expertise is **knowing what to ask for**.
