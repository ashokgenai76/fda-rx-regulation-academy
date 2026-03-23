/**
 * FDA Rx Regulation Academy — Course Content
 * All modules, slides, and quiz data grounded in actual CFR citations and FDA guidance.
 */

const COURSE_MODULES = [
  /* ═══════════════════════════════════════════════════
     MODULE 1 — What is the USPI?
  ══════════════════════════════════════════════════ */
  {
    id: 1,
    title: 'What is the USPI?',
    subtitle: 'United States Prescribing Information — Structure & Requirements',
    icon: '📋',
    color: '#1a56db',
    tags: ['21 CFR 201.56', '21 CFR 201.57', 'PLR Format'],
    description: 'Learn the legal structure of every FDA-approved prescription drug label, the PLR format, and what must be disclosed.',
    slides: [
      {
        type: 'hero',
        icon: '📋',
        moduleNum: 'MODULE 1',
        title: 'United States <em>Prescribing Information</em>',
        subtitle: 'Every FDA-approved prescription drug must have a USPI — a legally mandated, comprehensive document that defines how the drug can be discussed, promoted, and used.',
        tags: ['21 CFR 201.56', '21 CFR 201.57', 'PLR Format', 'Package Insert']
      },
      {
        type: 'content',
        label: 'The Foundation',
        title: 'What Is the USPI?',
        body: `
          <p style="font-size:14px;color:#475569;line-height:1.7;margin-bottom:20px;">
            The <strong>United States Prescribing Information (USPI)</strong> — also called the "package insert" or "PI" — is the FDA-approved labeling for a prescription drug. It is the single authoritative source for how the drug must be described, promoted, and used.
          </p>
          <div class="cards-grid">
            <div class="info-card">
              <span class="info-card-icon">⚖️</span>
              <h4>Legal Requirement</h4>
              <p>Every prescription drug must have an approved USPI before marketing. No promotion may contradict it.</p>
            </div>
            <div class="info-card green">
              <span class="info-card-icon">🩺</span>
              <h4>For Healthcare Providers</h4>
              <p>Written for prescribers, pharmacists, and other licensed professionals — not for patients.</p>
            </div>
            <div class="info-card orange">
              <span class="info-card-icon">📅</span>
              <h4>Living Document</h4>
              <p>Updated whenever new safety information, new indications, or labeling changes are approved by FDA.</p>
            </div>
            <div class="info-card cyan">
              <span class="info-card-icon">🔒</span>
              <h4>Sets Boundaries</h4>
              <p>All promotional claims must be "consistent with the labeling" — the USPI defines what is on-label.</p>
            </div>
          </div>
          <div class="cfr-badge">📌 Governed by: 21 CFR 201.56 and 21 CFR 201.57</div>
        `
      },
      {
        type: 'content',
        label: 'PLR Format',
        title: 'The Physician Labeling Rule (PLR) Format',
        body: `
          <div class="alert-box info" style="margin-bottom:20px;">
            <div class="alert-box-icon">ℹ️</div>
            <div class="alert-box-content">
              <strong>The PLR Format (21 CFR 201.56 & 201.57)</strong>
              <p>In 2006, FDA finalized the Physician Labeling Rule, requiring a standardized format for all new and recently approved drugs. The PLR introduced Highlights, the Table of Contents, and a specific section ordering.</p>
            </div>
          </div>
          <ul class="rule-list">
            <li>
              <div class="rule-num">1</div>
              <div class="rule-text">
                <strong>Highlights of Prescribing Information</strong>
                <span>A concise summary (≤ ½ page) of the most critical information. Includes Black Box Warnings, indications, dosing, and key contraindications. Cannot contain information not in the Full PI.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2</div>
              <div class="rule-text">
                <strong>Full Prescribing Information: Contents (Table of Contents)</strong>
                <span>A structured table of contents listing all 17+ required sections, allowing quick navigation.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">3</div>
              <div class="rule-text">
                <strong>Full Prescribing Information (FPI)</strong>
                <span>The complete, detailed document organized into mandatory numbered sections. This is the legal labeling from which all promotional claims must derive.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 21 CFR 201.56(d) — PLR format mandatory for applications submitted after June 30, 2006</div>
        `
      },
      {
        type: 'content',
        label: 'Required Sections',
        title: 'The 17 Required Sections of the Full PI',
        body: `
          <p style="font-size:14px;color:#475569;line-height:1.7;margin-bottom:16px;">
            Under <strong>21 CFR 201.57</strong>, the Full Prescribing Information must include these sections in order:
          </p>
          <div class="cards-grid">
            <div class="info-card">
              <h4>Section 1 — Indications & Usage</h4>
              <p>What the drug is approved to treat. This is the cornerstone of all promotional claims.</p>
            </div>
            <div class="info-card orange">
              <h4>Section 2 — Dosage & Administration</h4>
              <p>Recommended doses, routes of administration, preparation instructions.</p>
            </div>
            <div class="info-card red">
              <h4>Section 4 — Contraindications</h4>
              <p>Situations in which the drug must NOT be used. Must be in the Highlights.</p>
            </div>
            <div class="info-card red">
              <h4>Section 5 — Warnings & Precautions</h4>
              <p>Serious risks that require special monitoring or dosage adjustment.</p>
            </div>
            <div class="info-card green">
              <h4>Section 6 — Adverse Reactions</h4>
              <p>All adverse reactions observed in clinical trials at ≥ 1% incidence.</p>
            </div>
            <div class="info-card cyan">
              <h4>Section 8 — Use in Specific Populations</h4>
              <p>Pregnancy, lactation, pediatrics, geriatrics, and renal/hepatic impairment.</p>
            </div>
          </div>
          <div class="alert-box warning">
            <div class="alert-box-icon">⚠️</div>
            <div class="alert-box-content">
              <strong>Section 5.1 — Boxed Warning ("Black Box")</strong>
              <p>If present, the most serious warning must appear prominently in a box at the top of the Warnings section AND in the Highlights. Required to be referenced in all promotional materials that include the indication.</p>
            </div>
          </div>
        `
      },
      {
        type: 'content',
        label: 'Key Principle',
        title: 'Why the USPI Matters for Promotion',
        body: `
          <div class="highlight-box" style="margin-bottom:20px;">
            <div class="big-text">The "Four Corners" Rule</div>
            <p>All promotional claims must fall within the four corners of the approved labeling (USPI). Promoting outside those corners = off-label promotion.</p>
          </div>
          <ul class="rule-list">
            <li>
              <div class="rule-num">✓</div>
              <div class="rule-text">
                <strong>On-Label = Fair Game (with fair balance)</strong>
                <span>Any claim supported by the approved USPI may be used in promotion, as long as it's truthful, balanced, and not misleading.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✗</div>
              <div class="rule-text">
                <strong>Off-Label = Not Permitted in Promotion</strong>
                <span>Promoting a drug for uses, doses, populations, or routes not in the USPI is a violation of the FD&C Act §502, even if supported by external data.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">📄</div>
              <div class="rule-text">
                <strong>Consistent with Current Labeling (CCL)</strong>
                <span>The 2023 FDA Final Rule on "Consistent with Current Labeling" clarifies how companies must present information to avoid misleading claims.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 FD&C Act §502(a) — Misbranding if labeling is false or misleading</div>
        `
      },
      {
        type: 'content',
        label: 'PLLR 2014',
        title: 'Pregnancy & Lactation Labeling Rule (PLLR)',
        body: `
          <div class="alert-box success" style="margin-bottom:20px;">
            <div class="alert-box-icon">🆕</div>
            <div class="alert-box-content">
              <strong>Major 2014 Overhaul — Pregnancy Category Letters Eliminated</strong>
              <p>The PLLR (effective June 30, 2015) replaced the old letter-based Pregnancy Categories (A, B, C, D, X) with detailed narrative subsections providing more clinically useful information for prescribers and patients.</p>
            </div>
          </div>
          <ul class="rule-list">
            <li>
              <div class="rule-num">1</div>
              <div class="rule-text">
                <strong>Section 8.1 — Pregnancy</strong>
                <span>Must include a risk summary, clinical considerations, and available data from human studies, animal studies, or both. If a pregnancy exposure registry exists, the contact information must be listed prominently.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2</div>
              <div class="rule-text">
                <strong>Section 8.2 — Lactation</strong>
                <span>Must describe: (a) presence of drug in human milk, (b) effects on the breastfed infant, (c) effects on milk production. Must include a risk-benefit statement advising on breastfeeding decisions.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">3</div>
              <div class="rule-text">
                <strong>Section 8.3 — Females and Males of Reproductive Potential</strong>
                <span>New section required by PLLR — addresses pregnancy testing, contraception requirements, and fertility effects for both females and males of reproductive potential.</span>
              </div>
            </li>
          </ul>
          <div class="alert-box warning">
            <div class="alert-box-icon">⚠️</div>
            <div class="alert-box-content">
              <strong>Promotional Impact of PLLR</strong>
              <p>Promotional materials referencing pregnancy, lactation, or reproductive use must be consistent with the PLLR-formatted labeling. Claims like "safe in pregnancy" or "compatible with breastfeeding" without labeling support violate the misbranding standard.</p>
            </div>
          </div>
          <div class="cfr-badge">📌 21 CFR 201.57(c)(9)(i-iii) — PLLR | 79 FR 72064 (Dec. 4, 2014)</div>
        `
      },
      {
        type: 'content',
        label: 'Legal Authority',
        title: 'Labeling vs. Advertising — The Legal Distinction',
        body: `
          <p style="font-size:14px;color:#475569;line-height:1.7;margin-bottom:16px;">
            FDA regulates two related but legally distinct categories: <strong>labeling</strong> and <strong>advertising</strong>. Both are subject to OPDP oversight, but the regulatory basis differs.
          </p>
          <table class="compare-table">
            <tr><th>Category</th><th>Definition</th><th>Legal Basis</th><th>Examples</th></tr>
            <tr>
              <td>Labeling</td>
              <td>ALL written, printed, or graphic matter accompanying a drug or relating to it (very broad)</td>
              <td>FD&C Act §201(m); 21 CFR 1.3(a)</td>
              <td>Package insert, patient leaflet, detail aids, brochures, websites, sales aid kits</td>
            </tr>
            <tr>
              <td>Advertising</td>
              <td>Printed/published promotional communications directed at HCPs or consumers via paid media</td>
              <td>FD&C Act §502(n); 21 CFR 202.1</td>
              <td>Journal ads, TV commercials, radio spots, sponsored digital ads</td>
            </tr>
          </table>
          <div class="alert-box info">
            <div class="alert-box-icon">ℹ️</div>
            <div class="alert-box-content">
              <strong>Why the Distinction Matters</strong>
              <p>Labeling has a broader definition — a sales rep's leave-behind brochure or a company website is "labeling" under the FD&C Act even though it is not the package insert. This means OPDP has authority over a vast range of company communications beyond traditional advertising.</p>
            </div>
          </div>
          <div class="cfr-badge">📌 FD&C Act §201(m) — "Labeling" definition | FD&C Act §502(n) — Prescription drug advertising authority</div>
        `
      }
    ],
    quiz: [
      {
        q: 'The USPI (United States Prescribing Information) is governed by which CFR sections?',
        options: ['21 CFR 202.1 and 202.2', '21 CFR 201.56 and 201.57', '21 CFR 314.70 and 314.71', '21 CFR 101.1 and 101.2'],
        correct: 1,
        explanation: '21 CFR 201.56 establishes the general format and content requirements for prescription drug labeling, while 21 CFR 201.57 specifies the specific content requirements for each section of the Full Prescribing Information.',
        ref: '21 CFR 201.56–201.57 (Physician Labeling Rule, 2006)'
      },
      {
        q: 'What does the Highlights section of the USPI contain?',
        options: ['The complete clinical trial data', 'A concise summary (≤ ½ page) of the most critical prescribing information', 'Patient-friendly dosing instructions', 'The full list of all adverse events ever reported'],
        correct: 1,
        explanation: 'The Highlights of Prescribing Information is limited to a half-page and contains the most critical information: Black Box Warnings, indications, dosing, contraindications, and key warnings. It cannot contain information not found in the Full PI.',
        ref: '21 CFR 201.57(a) — Highlights requirements'
      },
      {
        q: 'A Boxed Warning ("Black Box") in the USPI must appear:',
        options: ['Only in the Warnings & Precautions section', 'Only in the package insert for hospital use', 'In the Highlights AND the Warnings & Precautions section', 'Only if requested by the prescribing physician'],
        correct: 2,
        explanation: 'Per 21 CFR 201.57(c)(1), a Boxed Warning must appear prominently at the top of the Warnings and Precautions section and must also be referenced in the Highlights. All promotional materials for that drug must also reference the Boxed Warning.',
        ref: '21 CFR 201.57(c)(1) — Boxed Warning placement'
      },
      {
        q: 'Which of the following statements about off-label promotion is correct?',
        options: ['It is permitted if supported by peer-reviewed literature', 'It is permitted for non-promotional educational materials only under certain conditions', 'It is always permitted for FDA-approved drugs', 'It is permitted if the company notifies FDA in advance'],
        correct: 1,
        explanation: 'Off-label promotion (promoting for unapproved uses) is prohibited under FD&C Act §502(a). However, truthful, non-misleading, non-promotional scientific exchange (SIUU — Scientifically Interesting Unsolicited Use) may be permissible under specific FDA guidance.',
        ref: 'FD&C Act §502(a); FDA Draft Guidance on Scientific Exchange (2023)'
      }
    ]
  },

  /* ═══════════════════════════════════════════════════
     MODULE 2 — OPDP: The Regulator
  ══════════════════════════════════════════════════ */
  {
    id: 2,
    title: 'OPDP: The Regulator',
    subtitle: 'Office of Prescription Drug Promotion — Mission, Authority & Jurisdiction',
    icon: '🏛️',
    color: '#7c3aed',
    tags: ['OPDP', 'FDA Authority', 'FDAAA 2007'],
    description: 'Understand OPDP\'s role within FDA, what it regulates, what falls outside its authority, and how it enforces the rules.',
    slides: [
      {
        type: 'hero',
        icon: '🏛️',
        moduleNum: 'MODULE 2',
        title: '<em>OPDP:</em> The Regulator',
        subtitle: 'The Office of Prescription Drug Promotion is the FDA office responsible for ensuring that prescription drug promotion is truthful, balanced, and accurately communicated.',
        tags: ['OPDP', 'FDA Authority', 'DDMAC', 'FDAAA 2007']
      },
      {
        type: 'content',
        label: 'Organization',
        title: 'What is OPDP?',
        body: `
          <p style="font-size:14px;color:#475569;line-height:1.7;margin-bottom:20px;">
            <strong>OPDP (Office of Prescription Drug Promotion)</strong> is a division within FDA's Center for Drug Evaluation and Research (CDER). Formerly known as DDMAC (Division of Drug Marketing, Advertising, and Communications), it was renamed OPDP in 2011 to reflect its expanded responsibilities.
          </p>
          <div class="cards-grid">
            <div class="info-card purple">
              <span class="info-card-icon">🏢</span>
              <h4>Part of CDER</h4>
              <p>OPDP sits within CDER, FDA's largest center, which oversees all human drug products including prescription and OTC drugs.</p>
            </div>
            <div class="info-card">
              <span class="info-card-icon">🔍</span>
              <h4>Reviews & Monitors</h4>
              <p>Reviews promotional materials voluntarily submitted by companies and actively monitors the marketplace for violations.</p>
            </div>
            <div class="info-card green">
              <span class="info-card-icon">📨</span>
              <h4>Enforcement Authority</h4>
              <p>Issues Untitled Letters, Warning Letters, and can recommend regulatory actions including injunctions and seizures.</p>
            </div>
            <div class="info-card orange">
              <span class="info-card-icon">👥</span>
              <h4>Public Role</h4>
              <p>Receives complaints from the public, healthcare professionals, and competitors about misleading drug promotion.</p>
            </div>
          </div>
          <div class="cfr-badge">📌 Authority derived from: FD&C Act §§502, 503 | FDAAA §901 (2007)</div>
        `
      },
      {
        type: 'content',
        label: 'Jurisdiction',
        title: 'What OPDP Regulates',
        body: `
          <table class="compare-table">
            <tr>
              <th>OPDP Regulates ✓</th>
              <th>Outside OPDP Jurisdiction ✗</th>
            </tr>
            <tr>
              <td>Prescription drug promotional labeling and advertising</td>
              <td>OTC (over-the-counter) drug advertising (→ FTC)</td>
            </tr>
            <tr>
              <td>Direct-to-consumer (DTC) television and print ads</td>
              <td>Medical device advertising (→ CDRH)</td>
            </tr>
            <tr>
              <td>Sales representatives' promotional activities</td>
              <td>Biologic promotional materials (→ CBER)</td>
            </tr>
            <tr>
              <td>Detail aids, leave-behinds, and sales aids</td>
              <td>Compounding pharmacy promotion</td>
            </tr>
            <tr>
              <td>Speaker programs and symposia materials</td>
              <td>Independent CME (when truly independent)</td>
            </tr>
            <tr>
              <td>Digital/social media promotional content</td>
              <td>News media editorial coverage</td>
            </tr>
            <tr>
              <td>Medical journal advertisements</td>
              <td>Peer-reviewed scientific publications</td>
            </tr>
          </table>
          <div class="alert-box info">
            <div class="alert-box-icon">ℹ️</div>
            <div class="alert-box-content">
              <strong>Key Distinction: Promotional vs. Non-Promotional</strong>
              <p>OPDP focuses on materials that promote a specific prescription drug. Independent scientific exchange, purely educational content, and news coverage are generally not subject to OPDP review.</p>
            </div>
          </div>
        `
      },
      {
        type: 'content',
        label: 'Voluntary Submission',
        title: 'The Form FDA 2253 Process',
        body: `
          <div class="alert-box warning" style="margin-bottom:20px;">
            <div class="alert-box-icon">⚠️</div>
            <div class="alert-box-content">
              <strong>Submission Requirement: Form FDA 2253</strong>
              <p>Companies must submit all promotional materials to OPDP at the time of first use (not before) using Form FDA 2253. There is no prior approval requirement — except for accelerated approval drugs under 21 CFR 314.550.</p>
            </div>
          </div>
          <ul class="rule-list">
            <li>
              <div class="rule-num">1</div>
              <div class="rule-text">
                <strong>At Time of First Use</strong>
                <span>Promotional materials must be submitted when first disseminated, not when created. This is a mandatory disclosure, not an approval process.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2</div>
              <div class="rule-text">
                <strong>Accelerated Approval Exception</strong>
                <span>For drugs approved under accelerated approval (21 CFR 314.550), ALL promotional materials must be submitted to FDA BEFORE use for review.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">3</div>
              <div class="rule-text">
                <strong>Voluntary Pre-Launch Review (PDUFA)</strong>
                <span>Companies may voluntarily submit materials pre-launch under the PDUFA "Core Launch Review" process for OPDP feedback before first use.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 21 CFR 314.81(b)(3)(i) — Form FDA 2253 requirement</div>
        `
      },
      {
        type: 'content',
        label: 'OPDP Mission',
        title: 'OPDP\'s Three Core Standards',
        body: `
          <div class="cards-grid">
            <div class="info-card" style="grid-column: 1 / -1;">
              <span class="info-card-icon">🎯</span>
              <h4>OPDP Mission Statement</h4>
              <p>To protect the public health by ensuring that prescription drug information is truthful, balanced, and accurately communicated so healthcare professionals and consumers can make informed decisions.</p>
            </div>
          </div>
          <ul class="rule-list" style="margin-top:16px;">
            <li>
              <div class="rule-num">T</div>
              <div class="rule-text">
                <strong>Truthful</strong>
                <span>All claims must be accurate and not create false impressions through selective presentation, misleading framing, or unsubstantiated statistics.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">B</div>
              <div class="rule-text">
                <strong>Balanced (Fair Balance)</strong>
                <span>Benefits must not be overstated relative to risks. All serious risks must be presented with comparable prominence to efficacy claims.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">A</div>
              <div class="rule-text">
                <strong>Accurately Communicated</strong>
                <span>Information must be presented in a way that the target audience (HCPs or patients) can understand and accurately interpret — including visual presentations and data displays.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 FD&C Act §502(a) — Misbranding standard | 21 CFR 202.1 — Advertising regulations</div>
        `
      },
      {
        type: 'content',
        label: 'Legal Framework',
        title: 'The Statutory Authority Behind OPDP',
        body: `
          <p style="font-size:14px;color:#475569;line-height:1.7;margin-bottom:16px;">
            OPDP's enforcement authority flows from several interlocking provisions of the FD&C Act. Understanding these gives you the "why" behind every rule.
          </p>
          <ul class="rule-list">
            <li>
              <div class="rule-num">§502</div>
              <div class="rule-text">
                <strong>FD&C Act §502 — Misbranding</strong>
                <span>A drug is "misbranded" if its labeling or advertising is false or misleading in any particular. This is the primary hook OPDP uses for all enforcement actions. Misbranded drugs cannot be legally shipped in interstate commerce.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">§502(a)</div>
              <div class="rule-text">
                <strong>§502(a) — False or Misleading Labeling</strong>
                <span>If labeling (broadly defined) is false or misleading, the drug is misbranded. This covers omissions of material facts as well as affirmative false claims.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">§502(n)</div>
              <div class="rule-text">
                <strong>§502(n) — Prescription Drug Advertising Authority</strong>
                <span>Specifically grants FDA authority over prescription drug advertising — requiring that ads include a true statement of information in brief summary relating to the drug's side effects, contraindications, and effectiveness.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">§301</div>
              <div class="rule-text">
                <strong>§301 — Prohibited Acts</strong>
                <span>Introducing a misbranded drug into interstate commerce is a prohibited act. Violations can result in civil penalties, injunctions, or criminal prosecution. Corporate officers can be held personally liable under the "Park Doctrine."</span>
              </div>
            </li>
          </ul>
          <div class="highlight-box" style="margin-top:8px;">
            <div class="big-text">The Park Doctrine</div>
            <p>Corporate executives can face personal criminal liability for FDCA violations even without direct knowledge — if they had authority to prevent the violation and failed to do so.</p>
          </div>
          <div class="cfr-badge">📌 FD&C Act §§301, 502(a), 502(n); 21 U.S.C. §§331, 352(a), 352(n)</div>
        `
      }
    ],
    quiz: [
      {
        q: 'OPDP was formerly known as:',
        options: ['CDER Division of Marketing', 'DDMAC (Division of Drug Marketing, Advertising, and Communications)', 'FDA Office of Promotions', 'OPDPR (Office of Prescription Drug Promotion and Review)'],
        correct: 1,
        explanation: 'OPDP was formerly called DDMAC — the Division of Drug Marketing, Advertising, and Communications. It was renamed OPDP in 2011 to reflect its broader responsibilities and office-level status within CDER.',
        ref: 'FDA Organizational History — CDER (2011)'
      },
      {
        q: 'Companies are required to submit promotional materials to OPDP:',
        options: ['Before first use for all drugs', 'At the time of first use using Form FDA 2253', 'Only if OPDP requests them', 'Only for DTC television advertisements'],
        correct: 1,
        explanation: 'Under 21 CFR 314.81(b)(3)(i), companies must submit promotional materials to FDA at the time of first use using Form FDA 2253. This is a mandatory post-marketing reporting requirement, not a pre-approval process — except for accelerated approval drugs.',
        ref: '21 CFR 314.81(b)(3)(i) — Post-marketing reporting'
      },
      {
        q: 'Which type of advertising is regulated by the FTC, NOT OPDP?',
        options: ['DTC prescription drug television commercials', 'OTC (over-the-counter) drug advertising', 'Prescription drug digital/social media promotion', 'Medical journal prescription drug advertisements'],
        correct: 1,
        explanation: 'The Federal Trade Commission (FTC) regulates OTC drug advertising and general health claims. OPDP (FDA) regulates prescription drug promotion. This division of authority is established by the Wheeler-Lea Amendment and FDA/FTC memoranda of understanding.',
        ref: 'FTC Act §5; FDA-FTC MOU (1971, updated)'
      }
    ]
  },

  /* ═══════════════════════════════════════════════════
     MODULE 3 — Types of Promotional Materials
  ══════════════════════════════════════════════════ */
  {
    id: 3,
    title: 'Types of Promotional Materials',
    subtitle: 'Product Claim, Reminder, Help-Seeking, and Non-Branded Ads',
    icon: '📢',
    color: '#0ea5e9',
    tags: ['Product Claim', 'Reminder Ads', 'Help-Seeking', '21 CFR 202.1'],
    description: 'Understand the four distinct types of prescription drug promotional materials and what rules apply to each.',
    slides: [
      {
        type: 'hero',
        icon: '📢',
        moduleNum: 'MODULE 3',
        title: 'Types of <em>Promotional Materials</em>',
        subtitle: 'Not all drug promotion is created equal. FDA recognizes distinct categories of materials, each with its own specific requirements and obligations.',
        tags: ['Product Claim Ads', 'Reminder Ads', 'Help-Seeking Ads', '21 CFR 202.1']
      },
      {
        type: 'content',
        label: 'Category 1',
        title: 'Product Claim Advertisements',
        body: `
          <div class="alert-box info" style="margin-bottom:20px;">
            <div class="alert-box-icon">📋</div>
            <div class="alert-box-content">
              <strong>The Most Common Type — and the Most Regulated</strong>
              <p>A Product Claim Ad names a drug AND makes a claim about its efficacy or safety. These are subject to the strictest requirements under 21 CFR 202.1.</p>
            </div>
          </div>
          <ul class="rule-list">
            <li>
              <div class="rule-num">1</div>
              <div class="rule-text">
                <strong>Must Name the Drug AND Make a Claim</strong>
                <span>Names the brand name, generic name, and/or indication. If it claims efficacy or safety, the full disclosure requirements apply.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2</div>
              <div class="rule-text">
                <strong>Brief Summary Required (Print/Digital)</strong>
                <span>Print and digital product claim ads must include a "brief summary" of the most important prescribing information — including all serious risks from the USPI.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">3</div>
              <div class="rule-text">
                <strong>Major Statement Required (Broadcast/DTC)</strong>
                <span>TV and radio ads must include a "major statement" presenting the most important risks of the drug, spoken clearly and audibly.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">4</div>
              <div class="rule-text">
                <strong>Fair Balance Required</strong>
                <span>Benefits and risks must be presented with comparable prominence. Risks cannot be buried, minimized, or visually obscured.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 21 CFR 202.1(e) — Content and format requirements for advertisements</div>
        `
      },
      {
        type: 'content',
        label: 'Category 2',
        title: 'Reminder Advertisements',
        body: `
          <div class="cards-grid">
            <div class="info-card cyan" style="grid-column: 1 / -1;">
              <span class="info-card-icon">🔔</span>
              <h4>What Is a Reminder Ad?</h4>
              <p>A reminder ad calls attention to the name of a drug but makes no claims about the drug's efficacy or safety. It "reminds" the audience the drug exists, without saying what it treats.</p>
            </div>
          </div>
          <ul class="rule-list" style="margin-top:16px;">
            <li>
              <div class="rule-num">✓</div>
              <div class="rule-text">
                <strong>What Reminder Ads CAN Include</strong>
                <span>Brand name, generic name, drug class, dosage form, and price/schedule information. May also include non-promotional imagery.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✗</div>
              <div class="rule-text">
                <strong>What Reminder Ads CANNOT Include</strong>
                <span>Any statement about the drug's indication, safety, efficacy, or benefits. No "helps treat," "approved for," or similar language.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">⚠️</div>
              <div class="rule-text">
                <strong>Boxed Warning Exception</strong>
                <span>If the drug has a Boxed Warning, reminder ads are NOT allowed. The FDA prohibits reminder ads for drugs with the most serious warnings to avoid minimizing risk awareness.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 21 CFR 202.1(e)(6) — Reminder advertisement exemption</div>
        `
      },
      {
        type: 'content',
        label: 'Category 3 & 4',
        title: 'Help-Seeking & Pre-Launch Communications',
        body: `
          <div class="info-card green" style="margin-bottom:16px;">
            <span class="info-card-icon">🤝</span>
            <h4>Help-Seeking Advertisements (Disease Awareness)</h4>
            <p>These ads discuss a disease or condition and encourage patients to talk to their doctor — but do NOT name a specific drug. Because they don't name a drug, they are generally not regulated by OPDP. However, if combined with a drug name, they become a product claim ad.</p>
          </div>
          <div class="info-card orange" style="margin-bottom:16px;">
            <span class="info-card-icon">🚀</span>
            <h4>Pre-Approval / Pre-Launch Information</h4>
            <p>Before FDA approval, companies may share factual, non-misleading information about a drug under investigation. However, they cannot promote the drug or imply it is safe/effective. FDA's "Intended Use" doctrine applies — if the company intends to market the product, communications can be treated as promotional even before approval.</p>
          </div>
          <div class="alert-box warning">
            <div class="alert-box-icon">⚠️</div>
            <div class="alert-box-content">
              <strong>Critical Distinction: Help-Seeking → Product Claim</strong>
              <p>A help-seeking ad that names a drug or strongly implies a single drug becomes a product claim ad and must comply with all product claim requirements, including fair balance and brief summary.</p>
            </div>
          </div>
          <div class="cfr-badge">📌 FDA Guidance: "Help-Seeking" vs. "Product Claim" Communications (2014)</div>
        `
      },
      {
        type: 'content',
        label: 'Format Requirements',
        title: 'Format by Medium',
        body: `
          <table class="compare-table">
            <tr>
              <th>Medium</th>
              <th>Key Requirement</th>
              <th>Regulatory Basis</th>
            </tr>
            <tr>
              <td>Print (journal, magazine)</td>
              <td>Brief summary of all serious risks</td>
              <td>21 CFR 202.1(e)(1)</td>
            </tr>
            <tr>
              <td>TV / Radio (DTC broadcast)</td>
              <td>Major statement + adequate provision for full PI</td>
              <td>21 CFR 202.1(e)(5); FDAMA 1997</td>
            </tr>
            <tr>
              <td>Digital / Internet</td>
              <td>Must present benefit/risk information together; no "one-click" separation</td>
              <td>FDA Guidance: Internet Advertising (2014)</td>
            </tr>
            <tr>
              <td>Sales rep detail aids</td>
              <td>Must include brief summary or PI; claims must be accurate</td>
              <td>21 CFR 202.1(l)</td>
            </tr>
            <tr>
              <td>Social media (Twitter/character-limited)</td>
              <td>Must present risk info even in limited space; cannot omit material facts</td>
              <td>FDA Guidance: Social Media (2014)</td>
            </tr>
          </table>
        `
      },
      {
        type: 'content',
        label: 'Category 5',
        title: 'Healthcare Economic Information (HCEI)',
        body: `
          <div class="alert-box info" style="margin-bottom:20px;">
            <div class="alert-box-icon">💰</div>
            <div class="alert-box-content">
              <strong>A Special Category: HCEI for Payers & Formulary Committees</strong>
              <p>Healthcare Economic Information (HCEI) is a distinct category of drug information directed at payers, formulary committees, and similar entities — not individual prescribers or patients. It is subject to a different standard than traditional promotional claims.</p>
            </div>
          </div>
          <ul class="rule-list">
            <li>
              <div class="rule-num">§114</div>
              <div class="rule-text">
                <strong>FDAMA §114 — The HCEI Safe Harbor</strong>
                <span>Section 114 of the FDA Modernization Act (1997) permits manufacturers to share HCEI — including pharmacoeconomic data, cost-effectiveness analyses, and budget impact models — with payers even if the information goes beyond the approved labeling, provided it is based on "competent and reliable scientific evidence."</span>
              </div>
            </li>
            <li>
              <div class="rule-num">📊</div>
              <div class="rule-text">
                <strong>Standard: Competent and Reliable Scientific Evidence (CRSE)</strong>
                <span>Unlike traditional promotional claims (which require "substantial evidence" from adequate well-controlled studies), HCEI requires "competent and reliable scientific evidence" — a somewhat lower bar that can include modeling studies, systematic reviews, and retrospective analyses.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">🏥</div>
              <div class="rule-text">
                <strong>Audience Restriction</strong>
                <span>HCEI under FDAMA §114 is specifically for payers, formulary committees, and similar healthcare management entities — NOT for individual prescribers or patients. Sharing HCEI with individual HCPs for prescribing decisions is treated as standard promotional communication.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">📋</div>
              <div class="rule-text">
                <strong>Must Be Accompanied by Approved Labeling</strong>
                <span>Any HCEI communication must be accompanied by — or have a reference to — the drug's approved labeling (USPI). Economic claims cannot be made in isolation without the clinical context the USPI provides.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 FDAMA §114 (1997) — Healthcare Economic Information provisions</div>
        `
      }
    ],
    quiz: [
      {
        q: 'A reminder advertisement for a prescription drug:',
        options: ['May include efficacy claims if they are very brief', 'Names the drug but makes NO claims about efficacy or safety', 'Is allowed even if the drug has a Boxed Warning', 'Must include the full Brief Summary'],
        correct: 1,
        explanation: 'A reminder ad names the drug and may include drug class, dosage form, and price — but cannot make any claims about what the drug treats or its safety/efficacy. Per 21 CFR 202.1(e)(6), reminder ads are exempt from brief summary requirements but are prohibited for drugs with Boxed Warnings.',
        ref: '21 CFR 202.1(e)(6) — Reminder advertisement rules'
      },
      {
        q: 'A DTC television advertisement that names a drug and makes efficacy claims must include:',
        options: ['A complete reading of the Full Prescribing Information', 'A "major statement" of the most important risks, spoken clearly', 'Only the Black Box Warning', 'No risk information if the risks are listed on the company website'],
        correct: 1,
        explanation: 'Under 21 CFR 202.1(e)(5) and FDA guidance, DTC broadcast ads must include a "major statement" presenting the most important risks of the drug in clear, plain language. The ad must also make "adequate provision" for consumers to access the full PI (via website, toll-free number, or print ad).',
        ref: '21 CFR 202.1(e)(5); FDAMA 1997 Broadcast DTC Guidance'
      },
      {
        q: 'A help-seeking advertisement that does NOT name a specific drug is:',
        options: ['Subject to OPDP full review requirements', 'Generally not regulated by OPDP as prescription drug promotion', 'Prohibited under FDA regulations', 'Required to include a brief summary'],
        correct: 1,
        explanation: 'Help-seeking (disease awareness) ads that do not name a specific drug are generally not regulated by OPDP as prescription drug advertising. However, if the ad strongly implies a single drug or names a drug, it becomes a product claim ad subject to all applicable requirements.',
        ref: 'FDA Guidance: DTC Promotions — "Help-Seeking" Communications (2004)'
      }
    ]
  },

  /* ═══════════════════════════════════════════════════
     MODULE 4 — The 3 Golden Rules of Promotion
  ══════════════════════════════════════════════════ */
  {
    id: 4,
    title: 'The 3 Golden Rules',
    subtitle: 'Truthful · Fair Balance · Not Misleading',
    icon: '⚖️',
    color: '#10b981',
    tags: ['Fair Balance', 'Truthfulness', 'Not Misleading', 'CCN Rule 2023'],
    description: 'Deep dive into the three core legal standards every piece of drug promotion must meet — and how FDA determines violations.',
    slides: [
      {
        type: 'hero',
        icon: '⚖️',
        moduleNum: 'MODULE 4',
        title: 'The 3 <em>Golden Rules</em> of Promotion',
        subtitle: 'Every prescription drug promotional piece must satisfy three fundamental legal standards derived from the FD&C Act and 21 CFR 202.1. Failure = misbranding.',
        tags: ['Truthful', 'Fair Balance', 'Not Misleading', 'FD&C Act §502(a)']
      },
      {
        type: 'content',
        label: 'Rule #1',
        title: 'Truthful — All Claims Must Be Accurate',
        body: `
          <div class="highlight-box" style="margin-bottom:20px;">
            <div class="big-text">Rule #1: Truthful</div>
            <p>Every factual claim in promotional materials must be true and scientifically supported by substantial evidence from well-controlled clinical studies.</p>
          </div>
          <ul class="rule-list">
            <li>
              <div class="rule-num">✓</div>
              <div class="rule-text">
                <strong>Substantial Evidence Standard</strong>
                <span>Efficacy claims must be supported by adequate and well-controlled studies (typically ≥ 2 pivotal trials). Anecdotal evidence or single small studies are insufficient.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✓</div>
              <div class="rule-text">
                <strong>Data Must Match the Claim</strong>
                <span>If a study showed a 30% reduction in a secondary endpoint, you cannot claim the drug "significantly reduces" the primary endpoint. The claim must match the actual study results.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✗</div>
              <div class="rule-text">
                <strong>Misleading Statistics</strong>
                <span>Using relative risk reduction without absolute numbers, cherry-picking subgroup data, or presenting interim data as final results are common truthfulness violations.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✗</div>
              <div class="rule-text">
                <strong>Unsubstantiated Superiority Claims</strong>
                <span>Claiming a drug is "better than" or "superior to" a competitor without a head-to-head trial showing statistically significant differences is a violation.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 FD&C Act §502(a); 21 CFR 202.1(e)(6)(ii) — Efficacy claims standards</div>
        `
      },
      {
        type: 'content',
        label: 'Rule #2',
        title: 'Fair Balance — Equal Prominence for Risks',
        body: `
          <div class="alert-box warning" style="margin-bottom:20px;">
            <div class="alert-box-icon">⚖️</div>
            <div class="alert-box-content">
              <strong>The Fair Balance Requirement</strong>
              <p>Promotional materials must present BOTH benefits AND risks with comparable prominence. The risks cannot be minimized, buried, or presented less prominently than the benefits.</p>
            </div>
          </div>
          <div class="cards-grid">
            <div class="info-card red">
              <span class="info-card-icon">🔊</span>
              <h4>Audio Fair Balance</h4>
              <p>In TV/radio ads, risk information must be read at the same speed and volume as benefit claims. "Speed reading" risks is a common violation.</p>
            </div>
            <div class="info-card red">
              <span class="info-card-icon">👁️</span>
              <h4>Visual Fair Balance</h4>
              <p>Risk text must be readable — same font size, sufficient contrast, adequate display time. Superimposing risk text over distracting visuals is a violation.</p>
            </div>
            <div class="info-card orange">
              <span class="info-card-icon">📊</span>
              <h4>Space & Prominence</h4>
              <p>The amount of space devoted to efficacy claims vs. risk disclosures must be comparable. A 4-page benefit spread with ¼ page of risks fails fair balance.</p>
            </div>
            <div class="info-card orange">
              <span class="info-card-icon">🎵</span>
              <h4>Distracting Elements</h4>
              <p>Background music, imagery, or visuals that detract from risk comprehension can constitute a fair balance violation even if the words are technically present.</p>
            </div>
          </div>
          <div class="cfr-badge">📌 21 CFR 202.1(e)(3) — Fair balance requirement | FDA Guidance: Brief Summary (2004)</div>
        `
      },
      {
        type: 'content',
        label: 'Rule #3',
        title: 'Not Misleading — Context Matters',
        body: `
          <p style="font-size:14px;color:#475569;line-height:1.7;margin-bottom:20px;">
            A claim can be technically true but still <strong>misleading</strong>. FDA evaluates the overall impression a "reasonable person" receives, not just the literal words used.
          </p>
          <ul class="rule-list">
            <li>
              <div class="rule-num">1</div>
              <div class="rule-text">
                <strong>Omission of Material Facts</strong>
                <span>Failing to disclose important limitations, contraindications, or population restrictions can make an otherwise true claim misleading. Example: Promoting efficacy data from a healthy young adult trial for an elderly patient population.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2</div>
              <div class="rule-text">
                <strong>Selective Presentation</strong>
                <span>Showing only the most favorable subgroup data while omitting the overall study results, or cherry-picking favorable trials while ignoring negative ones.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">3</div>
              <div class="rule-text">
                <strong>Misleading Visuals</strong>
                <span>Graphs with misleading Y-axis scaling, before/after images that don't reflect typical outcomes, or tables that obscure comparisons.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">4</div>
              <div class="rule-text">
                <strong>Implied Claims</strong>
                <span>Images, names, or taglines that imply unapproved indications or superiority — even without explicit text — can constitute misleading promotion.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 FD&C Act §502(a) — "False or misleading" standard</div>
        `
      },
      {
        type: 'content',
        label: '2023 Update',
        title: 'The 2023 Consistent with Current Labeling (CCN) Final Rule',
        body: `
          <div class="alert-box success" style="margin-bottom:20px;">
            <div class="alert-box-icon">🆕</div>
            <div class="alert-box-content">
              <strong>2023 CCN Final Rule — Major Update</strong>
              <p>FDA finalized the "Consistent with Current Labeling" (CCN) rule in 2023, providing updated guidance on how companies must ensure promotional materials accurately reflect the current approved labeling — especially when labeling changes occur.</p>
            </div>
          </div>
          <ul class="rule-list">
            <li>
              <div class="rule-num">1</div>
              <div class="rule-text">
                <strong>Labeling Changes Require Immediate Updates</strong>
                <span>When FDA approves a labeling change (e.g., a new safety warning), all promotional materials making claims related to that section must be updated or withdrawn promptly.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2</div>
              <div class="rule-text">
                <strong>No Older Labeling in Current Materials</strong>
                <span>Companies cannot continue using promotional materials that reference superseded labeling versions, even if technically approved at one time.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">3</div>
              <div class="rule-text">
                <strong>Digital Materials Must Be Updated</strong>
                <span>Websites, apps, and digital platforms must be updated to reflect current approved labeling — not just printed materials.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 21 CFR 202.1 — Updated per CCN Final Rule (2023)</div>
        `
      },
      {
        type: 'content',
        label: 'Comparative Claims',
        title: 'Comparative Advertising — The Highest Bar',
        body: `
          <div class="alert-box danger" style="margin-bottom:20px;">
            <div class="alert-box-icon">⚔️</div>
            <div class="alert-box-content">
              <strong>Comparative Advertising Is the Most Closely Scrutinized Category</strong>
              <p>Claims that Drug A is "better than," "superior to," or "more effective than" Drug B face the strictest evidentiary standards. OPDP consistently issues Warning Letters for unsubstantiated comparative claims.</p>
            </div>
          </div>
          <ul class="rule-list">
            <li>
              <div class="rule-num">1</div>
              <div class="rule-text">
                <strong>Head-to-Head Trial Required for Superiority Claims</strong>
                <span>Direct superiority claims (e.g., "more effective than Drug B") require adequate, well-controlled, head-to-head clinical trials showing statistically significant and clinically meaningful differences — not just meta-analyses or cross-trial comparisons.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2</div>
              <div class="rule-text">
                <strong>Cross-Study Comparisons Are Generally Insufficient</strong>
                <span>Comparing efficacy data from Drug A's trial with Drug B's separate trial (different populations, endpoints, study designs) to imply superiority is misleading and prohibited under 21 CFR 202.1(e).</span>
              </div>
            </li>
            <li>
              <div class="rule-num">3</div>
              <div class="rule-text">
                <strong>"Non-Inferior" ≠ "Superior"</strong>
                <span>A non-inferiority trial design demonstrates a drug is "not worse than" a comparator — it does NOT establish superiority. Promotional materials must accurately represent the study design and cannot conflate non-inferiority with superiority.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">4</div>
              <div class="rule-text">
                <strong>Implied Comparative Claims</strong>
                <span>Visuals, taglines, or "switch" messaging that imply Drug A is better than whatever the patient currently takes — without naming a comparator — can still constitute unsubstantiated comparative claims if the implication is clear.</span>
              </div>
            </li>
          </ul>
          <div class="alert-box info">
            <div class="alert-box-icon">✅</div>
            <div class="alert-box-content">
              <strong>What IS Allowed: Accurate Factual Comparisons</strong>
              <p>Accurately presenting data from a head-to-head trial, including the comparator's performance, is permitted — as long as the presentation is not misleading, cherry-picked, or selective, and all material facts (including limitations) are disclosed.</p>
            </div>
          </div>
          <div class="cfr-badge">📌 21 CFR 202.1(e) — Misleading ads | FDA Comparative Advertising Policy</div>
        `
      }
    ],
    quiz: [
      {
        q: 'Under the "fair balance" requirement, a TV commercial presenting 30 seconds of drug benefits must:',
        options: ['Include at least 15 seconds of risk information', 'Present risk information with comparable prominence and not rushed or minimized', 'Show a text disclaimer at the end', 'Include the complete Brief Summary on screen'],
        correct: 1,
        explanation: 'Fair balance under 21 CFR 202.1(e)(3) requires risk information to be presented with "comparable prominence" to benefit claims. This means it cannot be rushed, minimized, or presented so briefly or quietly that a reasonable person would not notice it. There is no specific time ratio rule, but prominence is the standard.',
        ref: '21 CFR 202.1(e)(3) — Fair balance; FDA Guidance: Presenting Risks in DTC TV Ads'
      },
      {
        q: 'A promotional brochure shows data only from a favorable subgroup of a clinical trial, omitting the overall trial results that showed no significant effect. This is:',
        options: ['Acceptable as long as the subgroup data is accurate', 'A "misleading by omission" violation — material facts were omitted', 'Acceptable if the full study is available on request', 'Only a violation if the drug is under accelerated approval'],
        correct: 1,
        explanation: 'Presenting only favorable subgroup data while omitting the overall study results constitutes selective presentation, which is a "misleading by omission" violation. FDA requires that promotions not omit material facts that would alter the overall impression created by the piece.',
        ref: 'FD&C Act §502(a); 21 CFR 202.1(e) — Misleading promotion'
      },
      {
        q: 'The 2023 CCN (Consistent with Current Labeling) Final Rule requires that:',
        options: ['Companies must re-submit all materials for OPDP review annually', 'Promotional materials must reflect the current approved labeling, not superseded versions', 'All digital content must be approved by OPDP before posting', 'Companies must stop all promotion when labeling changes are pending'],
        correct: 1,
        explanation: 'The 2023 CCN Final Rule clarifies that promotional materials must always be consistent with the current (most recent) FDA-approved labeling. When labeling changes occur, companies must update or withdraw promotional materials that reference superseded versions to avoid misbranding.',
        ref: '21 CFR 202.1 — 2023 CCN Final Rule update'
      }
    ]
  },

  /* ═══════════════════════════════════════════════════
     MODULE 5 — Promotional vs. Non-Promotional
  ══════════════════════════════════════════════════ */
  {
    id: 5,
    title: 'Promotional vs. Non-Promotional',
    subtitle: 'Off-Label Promotion, SIUU, and Scientific Exchange',
    icon: '🔬',
    color: '#f59e0b',
    tags: ['Off-Label', 'SIUU', 'Scientific Exchange', 'Intended Use'],
    description: 'Learn the critical distinction between regulated promotion and permissible scientific/educational exchange — including the SIUU doctrine.',
    slides: [
      {
        type: 'hero',
        icon: '🔬',
        moduleNum: 'MODULE 5',
        title: 'Promotional vs. <em>Non-Promotional</em>',
        subtitle: 'The line between regulated promotion and permissible scientific exchange is one of the most complex — and legally consequential — distinctions in pharmaceutical regulation.',
        tags: ['Off-Label Use', 'SIUU', 'Intended Use Doctrine', 'CME']
      },
      {
        type: 'content',
        label: 'The Key Distinction',
        title: 'What Makes Something "Promotional"?',
        body: `
          <p style="font-size:14px;color:#475569;line-height:1.7;margin-bottom:20px;">
            FDA uses the <strong>"Intended Use" doctrine</strong> to determine whether a communication is promotional. It's not just about what is said — it's about the <em>context, audience, and company intent</em>.
          </p>
          <div class="cards-grid">
            <div class="info-card red">
              <span class="info-card-icon">📢</span>
              <h4>Promotional (Regulated)</h4>
              <p>Materials that are designed to sell, market, or induce prescribing of a specific drug. Includes sales aids, advertising, speaker programs, and branded disease awareness.</p>
            </div>
            <div class="info-card green">
              <span class="info-card-icon">🎓</span>
              <h4>Non-Promotional (Generally Not Regulated)</h4>
              <p>Independent CME, peer-reviewed publications, investigator-initiated research, and truly unsolicited scientific information that is not designed to promote a product.</p>
            </div>
          </div>
          <div class="alert-box warning" style="margin-top:16px;">
            <div class="alert-box-icon">⚠️</div>
            <div class="alert-box-content">
              <strong>The "Intended Use" Doctrine (21 CFR 201.128)</strong>
              <p>FDA may determine intended use from objective evidence including labeling, advertising, and statements by company employees. Even if a company claims a communication is "educational," FDA can treat it as promotional if the overall context indicates a promotional purpose.</p>
            </div>
          </div>
        `
      },
      {
        type: 'content',
        label: 'Off-Label Promotion',
        title: 'Off-Label Promotion — The Prohibition',
        body: `
          <div class="alert-box danger" style="margin-bottom:20px;">
            <div class="alert-box-icon">🚫</div>
            <div class="alert-box-content">
              <strong>Off-Label Promotion is Prohibited</strong>
              <p>Promoting a drug for uses, doses, durations, routes of administration, or populations not included in the FDA-approved labeling (USPI) is illegal under FD&C Act §502(a) as misbranding — regardless of whether the off-label use is medically valid.</p>
            </div>
          </div>
          <ul class="rule-list">
            <li>
              <div class="rule-num">✗</div>
              <div class="rule-text">
                <strong>Unapproved Indications</strong>
                <span>Promoting for a disease or condition not listed in Section 1 (Indications & Usage) of the USPI.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✗</div>
              <div class="rule-text">
                <strong>Unapproved Doses</strong>
                <span>Promoting dosing regimens higher, lower, or more frequent than those in Section 2 (Dosage & Administration).</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✗</div>
              <div class="rule-text">
                <strong>Unapproved Populations</strong>
                <span>Promoting for patient populations explicitly excluded from the labeling (e.g., pediatrics if only adults are approved).</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✓</div>
              <div class="rule-text">
                <strong>Prescribers May Prescribe Off-Label</strong>
                <span>Importantly, FDA does NOT prohibit physicians from prescribing off-label — it prohibits manufacturers from PROMOTING off-label use. Physicians have clinical discretion.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 FD&C Act §502(a)(1); 21 CFR 201.128 — Intended use</div>
        `
      },
      {
        type: 'content',
        label: 'SIUU',
        title: 'Scientifically Interesting Unsolicited Use (SIUU)',
        body: `
          <div class="info-card green" style="margin-bottom:16px;">
            <span class="info-card-icon">🔬</span>
            <h4>What is SIUU?</h4>
            <p>SIUU allows companies to respond to <em>unsolicited</em> requests from healthcare professionals for scientific information about unapproved uses of their drugs — without that response being treated as off-label promotion.</p>
          </div>
          <ul class="rule-list">
            <li>
              <div class="rule-num">1</div>
              <div class="rule-text">
                <strong>Must Be Truly Unsolicited</strong>
                <span>The HCP must ask first — companies cannot create opportunities, encourage, or "prime" HCPs to ask about off-label uses. Solicited questions do not qualify.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2</div>
              <div class="rule-text">
                <strong>Truthful and Non-Misleading</strong>
                <span>The response must be truthful, balanced, and non-misleading. It must present data in context, including limitations and contrary evidence.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">3</div>
              <div class="rule-text">
                <strong>Not Accompanied by Promotion</strong>
                <span>SIUU responses must be separated from any promotional materials. They cannot be linked to or bundled with sales activity for the same drug.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">4</div>
              <div class="rule-text">
                <strong>Medical Affairs Function</strong>
                <span>SIUU responses are typically managed by Medical Affairs or Medical Science Liaisons (MSLs), not Sales — this separation is critical to maintaining non-promotional status.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 FDA Draft Guidance: Responding to Unsolicited Requests (2011); Updated Draft (2023)</div>
        `
      },
      {
        type: 'content',
        label: 'CME & Publications',
        title: 'Independent CME and Scientific Publications',
        body: `
          <table class="compare-table">
            <tr>
              <th>Activity</th>
              <th>Status</th>
              <th>Key Requirement</th>
            </tr>
            <tr>
              <td>Truly Independent CME</td>
              <td style="color:#10b981;font-weight:700;">Non-Promotional ✓</td>
              <td>Company has no control over content, speakers, or messaging</td>
            </tr>
            <tr>
              <td>Company-sponsored CME</td>
              <td style="color:#f59e0b;font-weight:700;">Gray Area ⚠️</td>
              <td>Must meet ACCME independence standards; company cannot influence content</td>
            </tr>
            <tr>
              <td>Peer-reviewed journal articles</td>
              <td style="color:#10b981;font-weight:700;">Non-Promotional ✓</td>
              <td>Independent peer review; company may not have directed the content</td>
            </tr>
            <tr>
              <td>Company-prepared reprints</td>
              <td style="color:#ef4444;font-weight:700;">Promotional ✗</td>
              <td>Distribution of reprints by sales reps = promotion; must meet all promo rules</td>
            </tr>
            <tr>
              <td>Speaker bureau programs</td>
              <td style="color:#ef4444;font-weight:700;">Promotional ✗</td>
              <td>Company-paid speakers using company slides = promotional activity</td>
            </tr>
          </table>
          <div class="cfr-badge">📌 FDA Guidance: Industry-Supported Scientific and Educational Activities (1997); ACCME Standards for Integrity</div>
        `
      },
      {
        type: 'content',
        label: 'Reprint Practices',
        title: 'Good Reprint Practices — Sharing Scientific Literature',
        body: `
          <div class="alert-box warning" style="margin-bottom:20px;">
            <div class="alert-box-icon">📄</div>
            <div class="alert-box-content">
              <strong>Distributing Reprints Is Heavily Regulated</strong>
              <p>FDA's 2009 "Good Reprint Practices" guidance (and subsequent updates) sets strict conditions under which manufacturers may distribute reprints of peer-reviewed scientific articles about unapproved uses. Violations are among the most common off-label enforcement targets.</p>
            </div>
          </div>
          <ul class="rule-list">
            <li>
              <div class="rule-num">1</div>
              <div class="rule-text">
                <strong>Must Be Peer-Reviewed & Published in Bona Fide Journal</strong>
                <span>The article must be published in a peer-reviewed journal with an established editorial process. Supplements, conference abstracts, or articles in journals where the company controls content do not qualify.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2</div>
              <div class="rule-text">
                <strong>Must Be Truthful and Not Misleading</strong>
                <span>The reprint itself cannot be false or misleading. A technically published article that presents data selectively or uses a flawed methodology does not become acceptable simply because it is peer-reviewed.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">3</div>
              <div class="rule-text">
                <strong>Must Be Accompanied by the Approved Labeling</strong>
                <span>Any reprint about an off-label use must be provided together with the current USPI, so the HCP can see the approved indication and compare it against the off-label data.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">4</div>
              <div class="rule-text">
                <strong>Must Not Be Distributed by Sales Representatives Proactively</strong>
                <span>Proactive distribution by sales reps is promotional activity — even if the content is peer-reviewed. Good Reprint Practices are best administered through Medical Affairs/MSL channels in response to unsolicited HCP requests.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">5</div>
              <div class="rule-text">
                <strong>Conflicts of Interest Must Be Disclosed</strong>
                <span>Any financial relationships between the article's authors and the manufacturer must be clearly disclosed along with the reprint. Undisclosed conflicts of interest can make the distribution misleading.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 FDA Guidance: Good Reprint Practices for the Distribution of Medical Journal Articles (2009)</div>
        `
      }
    ],
    quiz: [
      {
        q: 'A pharmaceutical sales representative proactively hands an HCP a reprint from a peer-reviewed journal discussing an off-label use of their drug. This is:',
        options: ['Permitted as it is peer-reviewed scientific literature', 'Permitted if the reprint is accompanied by the USPI', 'Off-label promotion — the proactive distribution by a sales rep = promotional activity', 'Permitted under SIUU guidelines'],
        correct: 2,
        explanation: 'A sales representative proactively distributing reprints about off-label uses is considered off-label promotion regardless of whether the content is from a peer-reviewed journal. The distribution was solicited (initiated by the company), making it promotional. SIUU applies to unsolicited HCP requests, not proactive distribution by sales representatives.',
        ref: 'FD&C Act §502(a); FDA Guidance: Good Reprint Practices (2009)'
      },
      {
        q: 'For a company response to qualify as SIUU (Scientifically Interesting Unsolicited Use), the request must be:',
        options: ['Submitted in writing by the HCP', 'Genuinely unsolicited — the HCP asks first without company prompting', 'Made by a physician only (not pharmacists or nurses)', 'Made at least 30 days before the response is provided'],
        correct: 1,
        explanation: 'The defining requirement of SIUU is that the scientific information request must be truly unsolicited — the healthcare professional must ask on their own initiative without any prompting, encouragement, or "priming" by the company. If the company creates opportunities for these questions, the exchange becomes solicited and loses SIUU protection.',
        ref: 'FDA Draft Guidance: Responding to Unsolicited Requests for Off-Label Information (2023)'
      }
    ]
  },

  /* ═══════════════════════════════════════════════════
     MODULE 6 — OPDP Enforcement Actions
  ══════════════════════════════════════════════════ */
  {
    id: 6,
    title: 'OPDP Enforcement Actions',
    subtitle: 'Warning Letters, Untitled Letters, and Regulatory Consequences',
    icon: '⚠️',
    color: '#ef4444',
    tags: ['Warning Letters', 'Untitled Letters', 'Enforcement', 'Penalties'],
    description: 'Understand the full spectrum of OPDP enforcement — from informal communications to injunctions and criminal referrals.',
    slides: [
      {
        type: 'hero',
        icon: '⚠️',
        moduleNum: 'MODULE 6',
        title: 'OPDP <em>Enforcement Actions</em>',
        subtitle: 'OPDP has a range of enforcement tools — from informal untitled letters to formal warning letters, injunctions, and criminal referrals. Understanding these tools is essential for compliance.',
        tags: ['Warning Letters', 'Untitled Letters', 'Injunctions', 'Criminal Referrals']
      },
      {
        type: 'content',
        label: 'The Two Letters',
        title: 'Untitled Letters vs. Warning Letters',
        body: `
          <div class="cards-grid" style="margin-bottom:20px;">
            <div class="info-card orange">
              <span class="info-card-icon">📧</span>
              <h4>Untitled Letter (UL)</h4>
              <p>For violations that do not rise to the level of regulatory significance of a Warning Letter. These address technical violations, minor omissions, or issues that can be corrected without immediate action. Companies typically respond within 20 business days.</p>
            </div>
            <div class="info-card red">
              <span class="info-card-icon">⚠️</span>
              <h4>Warning Letter (WL)</h4>
              <p>For significant violations including false/misleading efficacy claims, omission of risk information, off-label promotion, or other serious violations. Warning Letters require a formal response and corrective action plan within 15-20 business days.</p>
            </div>
          </div>
          <table class="compare-table">
            <tr>
              <th>Factor</th>
              <th>Untitled Letter</th>
              <th>Warning Letter</th>
            </tr>
            <tr>
              <td>Severity</td>
              <td>Minor/technical violations</td>
              <td>Significant regulatory violations</td>
            </tr>
            <tr>
              <td>Response timeline</td>
              <td>~20 business days</td>
              <td>15–20 business days</td>
            </tr>
            <tr>
              <td>Public posting</td>
              <td>Yes (FDA website)</td>
              <td>Yes (FDA website, prominently)</td>
            </tr>
            <tr>
              <td>Corrective action required</td>
              <td>Discontinue/modify material</td>
              <td>Discontinue + submit corrective materials</td>
            </tr>
            <tr>
              <td>Can lead to further action</td>
              <td>Less likely</td>
              <td>Yes — injunction, seizure, criminal referral</td>
            </tr>
          </table>
        `
      },
      {
        type: 'content',
        label: 'Common Violations',
        title: 'Most Common Reasons for OPDP Letters',
        body: `
          <ul class="rule-list">
            <li>
              <div class="rule-num">1</div>
              <div class="rule-text">
                <strong>Omission or Minimization of Risk Information</strong>
                <span>The most common violation — failing to present serious risks, burying risk language, or using distracting visuals during risk disclosure.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2</div>
              <div class="rule-text">
                <strong>Overstatement of Efficacy</strong>
                <span>Making claims broader than what clinical data supports, using superlatives without substantiation, or implying superiority without head-to-head data.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">3</div>
              <div class="rule-text">
                <strong>Off-Label Promotion</strong>
                <span>Promoting unapproved indications, doses, or patient populations — directly or by implication through visuals, testimonials, or speaker remarks.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">4</div>
              <div class="rule-text">
                <strong>Misleading Data Presentations</strong>
                <span>Distorted graphs, selective endpoint reporting, misleading before/after comparisons, or presenting post-hoc analyses as primary outcomes.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">5</div>
              <div class="rule-text">
                <strong>Lack of Fair Balance</strong>
                <span>Speed-reading risk disclosures in TV ads, using imagery that conflicts with risk messages, or presenting risk information in smaller or lighter type.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 OPDP Warning Letter database: fda.gov/drugs/warning-letters-and-notice-violation-letters-pharmaceutical-companies</div>
        `
      },
      {
        type: 'content',
        label: 'Beyond Letters',
        title: 'Escalating Enforcement Actions',
        body: `
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-year">Step 1</div>
              <h4>Untitled Letter / Warning Letter</h4>
              <p>OPDP issues a letter citing specific violations and requesting corrective action. The company must respond and discontinue the violative material.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">Step 2</div>
              <h4>Corrective Advertising</h4>
              <p>For serious violations (especially those that caused patient harm or widespread misinformation), FDA may require the company to run corrective advertising — ads that correct the false impressions created by the violative promotion.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">Step 3</div>
              <h4>Consent Decree / Injunction</h4>
              <p>FDA can seek a court injunction to stop ongoing violations. A consent decree may require FDA oversight of all promotional materials for a period of years.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">Step 4</div>
              <h4>Seizure & Civil Penalties</h4>
              <p>FDA can seize violative products. Civil monetary penalties under the FD&C Act can reach millions of dollars per violation.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">Step 5</div>
              <h4>Criminal Referral to DOJ</h4>
              <p>In the most serious cases (fraud, deliberate off-label promotion campaigns), FDA refers cases to the Department of Justice for criminal prosecution. Companies have paid billions in settlements (e.g., GlaxoSmithKline $3B in 2012, Pfizer $2.3B in 2009).</p>
            </div>
          </div>
          <div class="cfr-badge">📌 FD&C Act §§301-303 — Prohibited acts and penalties</div>
        `
      },
      {
        type: 'content',
        label: 'Real Examples',
        title: 'Notable OPDP Warning Letter Cases',
        body: `
          <div class="cards-grid">
            <div class="info-card red">
              <span class="info-card-icon">💊</span>
              <h4>Risk Information in Audio</h4>
              <p>Multiple Warning Letters have been issued for DTC TV ads that read risk disclosures too quickly ("speed-reading") or at lower volume, violating fair balance requirements.</p>
            </div>
            <div class="info-card red">
              <span class="info-card-icon">📱</span>
              <h4>Social Media Violations</h4>
              <p>Companies have received Untitled Letters for sponsored Twitter/X posts that made efficacy claims without any risk information, citing character-limit constraints — which FDA does not accept as justification.</p>
            </div>
            <div class="info-card orange">
              <span class="info-card-icon">📊</span>
              <h4>Misleading Graphs</h4>
              <p>Warning Letters issued for journal ads using truncated Y-axes that visually exaggerated drug efficacy differences, creating false impressions of superiority.</p>
            </div>
            <div class="info-card orange">
              <span class="info-card-icon">🩺</span>
              <h4>Speaker Program Overreach</h4>
              <p>Enforcement actions for speaker bureau programs where company-paid physicians went beyond approved labeling, and the company failed to monitor or correct the off-label statements.</p>
            </div>
          </div>
          <div class="cfr-badge">📌 All Warning Letters publicly available at: fda.gov/OPDP</div>
        `
      }
    ],
    quiz: [
      {
        q: 'An OPDP Warning Letter (as opposed to an Untitled Letter) is typically issued when:',
        options: ['A company misses a Form FDA 2253 deadline', 'There are significant regulatory violations such as false efficacy claims or off-label promotion', 'A minor formatting error is found in a promotional piece', 'A company fails to update its website within 30 days of a labeling change'],
        correct: 1,
        explanation: 'Warning Letters are reserved for significant regulatory violations — including false or misleading efficacy claims, omission of important risk information, off-label promotion, or violations that could directly impact patient safety. Minor violations (formatting, technical errors) typically receive Untitled Letters.',
        ref: 'FDA OPDP — Distinction between Warning Letters and Untitled Letters'
      },
      {
        q: 'Which of the following is the most common type of violation in OPDP Warning Letters?',
        options: ['Companies failing to submit Form FDA 2253 on time', 'Omission or minimization of risk information (violation of fair balance)', 'Using the wrong font size in the Brief Summary', 'Failing to include the company logo in promotional materials'],
        correct: 1,
        explanation: 'The omission or minimization of risk information — violations of the fair balance requirement — consistently represents the most common category of OPDP enforcement action. This includes speeding through risk disclosures in broadcast ads, burying risk text, and using distracting visuals during risk disclosure.',
        ref: 'FDA OPDP Warning Letter Database — Trend Analysis'
      },
      {
        q: 'When FDA requires corrective advertising after a promotional violation, this means:',
        options: ['The company must re-submit all future ads for pre-approval', 'The company must run new ads specifically designed to correct the false impressions created by the violative promotion', 'The company must issue a press release apologizing for the violation', 'The company loses its right to advertise for 12 months'],
        correct: 1,
        explanation: 'Corrective advertising is a remedy FDA may require when a promotional campaign has created false impressions that persist in the public or professional consciousness. The company must create and disseminate new promotional materials specifically designed to correct those false impressions — not just stop the original ads.',
        ref: 'FD&C Act §502; FDA Corrective Advertising Authority'
      }
    ]
  },

  /* ═══════════════════════════════════════════════════
     MODULE 7 — DTC Advertising
  ══════════════════════════════════════════════════ */
  {
    id: 7,
    title: 'DTC Advertising Rules',
    subtitle: 'Direct-to-Consumer Advertising — History, Requirements & Digital Era',
    icon: '📺',
    color: '#06b6d4',
    tags: ['DTC', 'Broadcast Ads', 'FDAMA 1997', 'Digital 2024'],
    description: 'From the 1997 broadcast DTC guidance to the 2024 digital compliance deadline — the complete history and current rules for DTC advertising.',
    slides: [
      {
        type: 'hero',
        icon: '📺',
        moduleNum: 'MODULE 7',
        title: 'DTC <em>Advertising</em> Rules',
        subtitle: 'The United States is one of only two countries (with New Zealand) that permits Direct-to-Consumer prescription drug advertising. Understanding the rules governing these ads is critical.',
        tags: ['DTC', 'FDAMA 1997', 'Major Statement', 'Adequate Provision']
      },
      {
        type: 'content',
        label: 'History',
        title: 'The Evolution of DTC Advertising',
        body: `
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-year">1962</div>
              <h4>Kefauver-Harris Amendment</h4>
              <p>Required FDA approval of drug efficacy — established the modern drug approval framework. Advertising regulations were tightened.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">1981</div>
              <h4>First DTC Print Ads</h4>
              <p>Merck ran the first modern DTC prescription drug ads in print magazines. FDA initially allowed them under existing regulations.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">1983–1985</div>
              <h4>FDA Voluntary Moratorium</h4>
              <p>FDA requested a voluntary halt to DTC broadcast advertising while it studied the practice. The moratorium ended in 1985 without FDA action.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">1997</div>
              <h4>FDA Draft Guidance — The DTC Breakthrough</h4>
              <p>FDA's landmark guidance allowed TV/radio DTC ads without reading the full PI — as long as the ad included a "major statement" of key risks and made "adequate provision" for consumers to access full information.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">2007</div>
              <h4>FDAAA — Mandatory Review Authority</h4>
              <p>FDA Amendments Act gave FDA authority to require changes to DTC ads and impose civil monetary penalties for violations.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">2024</div>
              <h4>Updated DTC Digital Rules</h4>
              <p>FDA's updated guidance addressed digital DTC advertising, social media, and the requirement that risk information be presented even in space-limited formats.</p>
            </div>
          </div>
        `
      },
      {
        type: 'content',
        label: 'Broadcast Requirements',
        title: 'The 1997 Broadcast DTC Framework',
        body: `
          <p style="font-size:14px;color:#475569;line-height:1.7;margin-bottom:16px;">
            The 1997 FDA guidance created a 2-part framework that enables TV/radio DTC ads without requiring the full prescribing information to be read aloud:
          </p>
          <div class="cards-grid">
            <div class="info-card red">
              <span class="info-card-icon">🔊</span>
              <h4>1. Major Statement</h4>
              <p>The ad must include a spoken "major statement" presenting the most important risks of the drug — clearly and audibly, not rushed or buried in background music.</p>
            </div>
            <div class="info-card">
              <span class="info-card-icon">📞</span>
              <h4>2. Adequate Provision</h4>
              <p>The ad must make "adequate provision" for viewers to access the full PI through at least one of: toll-free phone number, website URL, print ad reference, or healthcare provider recommendation.</p>
            </div>
          </div>
          <ul class="rule-list" style="margin-top:16px;">
            <li>
              <div class="rule-num">✓</div>
              <div class="rule-text">
                <strong>Fair Balance Still Required</strong>
                <span>Despite the streamlined format, broadcast DTC ads must still present benefit and risk information with comparable prominence.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✓</div>
              <div class="rule-text">
                <strong>Boxed Warning Must Be Referenced</strong>
                <span>If the drug has a Boxed Warning, the major statement must specifically reference the boxed warning information.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✗</div>
              <div class="rule-text">
                <strong>Cannot Use Imagery to Distract</strong>
                <span>Happy, upbeat imagery shown during the risk disclosure portion of an ad can violate fair balance by undermining the impact of the risk information.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 21 CFR 202.1(e)(5); FDA Guidance: DTC Broadcast Advertisements (1999, revised)</div>
        `
      },
      {
        type: 'content',
        label: 'Digital DTC',
        title: 'DTC in the Digital Age',
        body: `
          <div class="alert-box info" style="margin-bottom:20px;">
            <div class="alert-box-icon">💻</div>
            <div class="alert-box-content">
              <strong>The Digital Challenge</strong>
              <p>FDA's 2014 and updated 2024 digital guidance addresses the unique challenges of prescription drug promotion in online environments — from websites to social media to search engine ads.</p>
            </div>
          </div>
          <table class="compare-table">
            <tr>
              <th>Platform</th>
              <th>Key Rule</th>
            </tr>
            <tr>
              <td>Brand Websites</td>
              <td>Must include the complete PI or a prominent link; benefit and risk must appear together on landing pages</td>
            </tr>
            <tr>
              <td>Banner Ads</td>
              <td>Must include the drug name AND the most important risk information or a direct hyperlink to it; cannot be purely reminder ads if space permits a claim</td>
            </tr>
            <tr>
              <td>Paid Search / Google Ads</td>
              <td>Even in character-limited formats, if a claim is made, risk information must be present or directly linked. FDA has issued letters for search ads with no risk information.</td>
            </tr>
            <tr>
              <td>Social Media (Instagram/Facebook)</td>
              <td>Product claim posts must include risk information and a link to the full PI. "One-click" rule: risk info cannot be more than one click away from any efficacy claim.</td>
            </tr>
            <tr>
              <td>Influencer / KOL Posts</td>
              <td>Paid partnerships must clearly disclose the commercial relationship AND comply with all OPDP promotional requirements.</td>
            </tr>
          </table>
        `
      },
      {
        type: 'content',
        label: 'Special Rules',
        title: 'DTC Special Provisions',
        body: `
          <div class="cards-grid">
            <div class="info-card orange">
              <span class="info-card-icon">🆕</span>
              <h4>New Drug Waiting Period</h4>
              <p>FDAAA 2007 authorized FDA to require a waiting period before DTC broadcast advertising for newly approved drugs, to allow healthcare professionals to become familiar with the drug first. This has not been exercised as a formal requirement but is encouraged voluntarily.</p>
            </div>
            <div class="info-card red">
              <span class="info-card-icon">📦</span>
              <h4>Boxed Warning in DTC</h4>
              <p>Drugs with Boxed Warnings may still be advertised DTC (there is no FDA ban), but the Boxed Warning information must be included in the major statement. However, reminder ads for such drugs are prohibited.</p>
            </div>
            <div class="info-card purple">
              <span class="info-card-icon">🧒</span>
              <h4>Pediatric Audience</h4>
              <p>FDA considers the composition of the viewing audience — ads aired during children's programming or on platforms primarily used by minors for prescription drugs not indicated for pediatric use may raise concerns.</p>
            </div>
            <div class="info-card green">
              <span class="info-card-icon">💬</span>
              <h4>Patient-Friendly Language</h4>
              <p>Unlike HCP materials, DTC ads must use plain language understandable to a general audience. FDA evaluates consumer comprehension in its review of DTC materials.</p>
            </div>
          </div>
          <div class="cfr-badge">📌 FDAAA §901 (2007); FDA Guidance: Presenting Risk Information in DTC Print and Broadcast Ads (2009)</div>
        `
      },
      {
        type: 'content',
        label: 'Adequate Provision',
        title: 'The 4 Methods of "Adequate Provision"',
        body: `
          <p style="font-size:14px;color:#475569;line-height:1.7;margin-bottom:20px;">
            For broadcast DTC ads to be exempt from including the full Brief Summary, they must make "adequate provision" for viewers/listeners to access the complete prescribing information. FDA's 1999 guidance specifies exactly four acceptable methods:
          </p>
          <ul class="rule-list">
            <li>
              <div class="rule-num">1</div>
              <div class="rule-text">
                <strong>Toll-Free Telephone Number</strong>
                <span>A toll-free number that consumers can call to receive the approved labeling. The number must be functional and staffed (or have an automated system) to deliver the full PI. Must be displayed/announced in the ad.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2</div>
              <div class="rule-text">
                <strong>Website Address (URL)</strong>
                <span>The ad must prominently display the drug's website address where consumers can access the full prescribing information. The PI must be accessible directly (not buried behind multiple clicks). This is now the most commonly used method.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">3</div>
              <div class="rule-text">
                <strong>Concurrent Print Advertisement</strong>
                <span>The TV/radio ad can reference a concurrent print advertisement (running in the same general media market at the same time) that contains the full Brief Summary. The print ad must actually be running — not historical.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">4</div>
              <div class="rule-text">
                <strong>Healthcare Provider Referral</strong>
                <span>The ad instructs consumers to "ask your doctor or pharmacist" for more information. This is typically used in combination with other methods rather than alone, as it places the burden on HCPs to provide full prescribing information.</span>
              </div>
            </li>
          </ul>
          <div class="alert-box info">
            <div class="alert-box-icon">💡</div>
            <div class="alert-box-content">
              <strong>Best Practice: Multiple Methods</strong>
              <p>Most companies use 2–3 methods simultaneously (e.g., website + toll-free number + HCP referral) to maximize access. FDA expects the stated methods to actually work — a non-functional URL or disconnected phone number defeats adequate provision even if displayed in the ad.</p>
            </div>
          </div>
          <div class="cfr-badge">📌 FDA Guidance: DTC Broadcast Drug Advertisements (1999) — Adequate Provision methods</div>
        `
      }
    ],
    quiz: [
      {
        q: 'The 1997 FDA DTC broadcast guidance allowed TV ads without reading the full PI, provided the ad includes:',
        options: ['The complete list of adverse reactions spoken at normal speed', 'A "major statement" of key risks AND "adequate provision" for full PI access', 'Only the indication and drug name', 'A physician testimonial and a safety hotline number'],
        correct: 1,
        explanation: 'The 1997 FDA guidance created a two-part framework: (1) a "major statement" presenting the most important risks of the drug, spoken clearly, and (2) "adequate provision" for consumers to access the full prescribing information through a toll-free number, website, print ad, or HCP referral.',
        ref: 'FDA Guidance: DTC Broadcast Drug Advertisements (1999); 21 CFR 202.1(e)(5)'
      },
      {
        q: 'A pharmaceutical company posts a sponsored Instagram post naming their drug and stating "Proven to reduce symptoms by 60%." The post includes no risk information. This is:',
        options: ['Compliant because social media has different rules than traditional advertising', 'A violation — product claim social media posts must include risk information or a direct link to it', 'Compliant as long as the company website has the full PI', 'Compliant because Instagram\'s character limits exempt companies from risk disclosure'],
        correct: 1,
        explanation: 'FDA applies the same fundamental requirements to social media as to other promotional formats. A sponsored post that makes an efficacy claim must include risk information or make it immediately accessible (the "one-click" principle). Character limits do not exempt companies from risk disclosure obligations.',
        ref: 'FDA Guidance: Social Media and Internet Promotions (2014); updated 2024 Digital DTC Guidance'
      },
      {
        q: 'Are prescription drugs with Boxed Warnings permitted to run DTC television advertisements?',
        options: ['No — Boxed Warning drugs are banned from all DTC advertising', 'Yes — but the Boxed Warning information must be included in the major statement', 'Yes — with no special requirements beyond standard DTC rules', 'Only with prior OPDP approval for each individual ad'],
        correct: 1,
        explanation: 'There is no FDA rule that bans DTC advertising for drugs with Boxed Warnings. However, per FDA guidance, the major statement in broadcast DTC ads for such drugs must specifically reference the Boxed Warning information. Note that REMINDER ads are prohibited for Boxed Warning drugs, but full product claim DTC ads are allowed.',
        ref: '21 CFR 202.1(e)(6); FDA DTC Guidance — Boxed Warning requirements'
      }
    ]
  },

  /* ═══════════════════════════════════════════════════
     MODULE 8 — Digital & Social Media Promotion
  ══════════════════════════════════════════════════ */
  {
    id: 8,
    title: 'Digital & Social Media',
    subtitle: 'FDA Rules for Online Drug Promotion in the Modern Era',
    icon: '📱',
    color: '#8b5cf6',
    tags: ['Social Media', 'Digital', 'SEO', 'Influencers', '2024 Rules'],
    description: 'Navigate the complex landscape of digital and social media prescription drug promotion — including influencer rules, search ads, and the latest 2024 FDA guidance.',
    slides: [
      {
        type: 'hero',
        icon: '📱',
        moduleNum: 'MODULE 8',
        title: 'Digital & Social Media <em>Promotion</em>',
        subtitle: 'The digital landscape has created entirely new challenges for pharmaceutical promotion regulation. FDA\'s guidance has evolved to address websites, social media, search advertising, and influencer marketing.',
        tags: ['Social Media 2014', 'Digital DTC 2024', 'Search Ads', 'Influencers']
      },
      {
        type: 'content',
        label: 'Core Principle',
        title: 'Same Rules, New Medium',
        body: `
          <div class="highlight-box" style="margin-bottom:20px;">
            <div class="big-text">Platform ≠ Exception</div>
            <p>FDA's core position: the fact that a platform has character limits, space constraints, or technical limitations does NOT exempt a company from meeting the fundamental standards of truthfulness, fair balance, and non-misleading communication.</p>
          </div>
          <ul class="rule-list">
            <li>
              <div class="rule-num">1</div>
              <div class="rule-text">
                <strong>If You Make a Claim, You Must Balance It</strong>
                <span>Any promotional content that names a drug and makes an efficacy or safety claim — regardless of the platform — must include risk information or make it immediately accessible.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2</div>
              <div class="rule-text">
                <strong>The "One-Click" Rule</strong>
                <span>For digital ads, risk information cannot be more than one hyperlink click away from an efficacy claim. Burying risks in a "terms and conditions" page 5 clicks deep is a violation.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">3</div>
              <div class="rule-text">
                <strong>If Space Is Too Limited, Don't Make Claims</strong>
                <span>If a digital format truly cannot accommodate both efficacy claims AND risk information, FDA's position is that the company should make only reminder-type content or not use that format at all for product claims.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 FDA Guidance: Social Media, Internet Advertising (2014); Updated Digital Guidance (2024)</div>
        `
      },
      {
        type: 'content',
        label: 'Platform Guide',
        title: 'Platform-by-Platform Digital Rules',
        body: `
          <div class="cards-grid">
            <div class="info-card">
              <span class="info-card-icon">🌐</span>
              <h4>Brand Website</h4>
              <p>Must include PI or a prominent link to it. The home page and indication pages must present benefit/risk together. Should be updated within 30 days of labeling changes.</p>
            </div>
            <div class="info-card cyan">
              <span class="info-card-icon">🔍</span>
              <h4>Paid Search (Google/Bing)</h4>
              <p>If a drug name + claim appears in the headline, risk info or a direct link to it must be in the ad. FDA has issued letters for paid search ads with drug claims and no risk disclosure.</p>
            </div>
            <div class="info-card purple">
              <span class="info-card-icon">📸</span>
              <h4>Instagram / Facebook</h4>
              <p>Sponsored posts making claims must include risk information or a direct link to full PI. Stories and Reels follow the same rules as broadcast DTC (major statement + adequate provision).</p>
            </div>
            <div class="info-card green">
              <span class="info-card-icon">🐦</span>
              <h4>X (formerly Twitter)</h4>
              <p>FDA explicitly addressed character-limited platforms: companies cannot use the character limit as justification to omit risk information. Options include a hyperlink to risk info within the post, or limiting the post to reminder-only content.</p>
            </div>
            <div class="info-card orange">
              <span class="info-card-icon">▶️</span>
              <h4>YouTube</h4>
              <p>Video ads follow broadcast DTC rules (major statement + adequate provision). Video descriptions must include a PI link if the video makes product claims.</p>
            </div>
            <div class="info-card indigo">
              <span class="info-card-icon">🎵</span>
              <h4>TikTok / Short Video</h4>
              <p>Newest frontier — FDA applies DTC broadcast rules. Even 15-second sponsored clips making drug claims must include a major statement or make the PI immediately accessible.</p>
            </div>
          </div>
        `
      },
      {
        type: 'content',
        label: 'Influencers',
        title: 'Influencer & KOL Marketing',
        body: `
          <div class="alert-box warning" style="margin-bottom:20px;">
            <div class="alert-box-icon">⚠️</div>
            <div class="alert-box-content">
              <strong>Influencer Posts Are Promotional Materials</strong>
              <p>When a pharmaceutical company pays or provides material compensation to an influencer (including KOLs, patient advocates, or celebrities) to post about a drug, that post is a promotional communication subject to all OPDP requirements.</p>
            </div>
          </div>
          <ul class="rule-list">
            <li>
              <div class="rule-num">1</div>
              <div class="rule-text">
                <strong>FTC + FDA Double Compliance</strong>
                <span>Influencer posts must comply with BOTH FTC endorsement guidelines (material relationship disclosure — "#ad," "#sponsored," "#paid") AND FDA promotional requirements (fair balance, not misleading).</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2</div>
              <div class="rule-text">
                <strong>Off-Label Restrictions Apply</strong>
                <span>A paid influencer cannot discuss off-label uses any more than a sales representative can. The endorsement is the company's promotional communication.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">3</div>
              <div class="rule-text">
                <strong>Company Liability for Influencer Content</strong>
                <span>If a company provides talking points, scripts, or reviews influencer content before posting, that content is fully attributed to the company for regulatory purposes — even if the influencer posts it in their own name.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">4</div>
              <div class="rule-text">
                <strong>Genuine Patient Testimonials</strong>
                <span>Truly organic patient testimonials (unpaid, not solicited by the company) are generally not regulated as company promotion. However, once compensation or direction is involved, full compliance is required.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 FTC Guides Concerning Endorsements and Testimonials (2023); FDA Influencer Guidance (2024)</div>
        `
      },
      {
        type: 'content',
        label: 'Best Practices',
        title: 'Digital Compliance Best Practices',
        body: `
          <div class="cards-grid">
            <div class="info-card green">
              <span class="info-card-icon">✅</span>
              <h4>Maintain a Digital Material Review Process</h4>
              <p>All digital content (websites, social posts, search ads, emails) should go through the same medical-legal-regulatory (MLR) review process as traditional promotional materials.</p>
            </div>
            <div class="info-card green">
              <span class="info-card-icon">🔗</span>
              <h4>Use Direct PI Links</h4>
              <p>Always provide a direct hyperlink to the full Prescribing Information — not just to the brand homepage. The link should be displayed prominently near any efficacy claims.</p>
            </div>
            <div class="info-card green">
              <span class="info-card-icon">📊</span>
              <h4>Monitor Third-Party Content</h4>
              <p>Companies are responsible for correcting inaccurate promotional information about their drugs on platforms they own, control, or have a commercial relationship with.</p>
            </div>
            <div class="info-card green">
              <span class="info-card-icon">📋</span>
              <h4>Submit Digital Materials (2253)</h4>
              <p>Digital promotional materials (websites, banner ads, social posts) are subject to the same Form FDA 2253 submission requirement at time of first use as traditional materials.</p>
            </div>
          </div>
          <div class="alert-box info" style="margin-top:4px;">
            <div class="alert-box-icon">💡</div>
            <div class="alert-box-content">
              <strong>Tip: When in Doubt, Don't Post</strong>
              <p>FDA's position is that if a digital format cannot accommodate the required risk information alongside an efficacy claim, the company should either limit the content to reminder-only material or choose a different format. A violation risk is not worth a tweet.</p>
            </div>
          </div>
        `
      }
    ],
    quiz: [
      {
        q: 'A pharma company pays a patient advocate with 500K followers to post on Instagram about how their drug "changed my life" without disclosing the paid relationship. This violates:',
        options: ['Only the FTC endorsement guidelines, not FDA regulations', 'Both FTC endorsement guidelines AND FDA promotional regulations', 'No regulations, as patient testimonials are always personal speech', 'Only FDA regulations, not FTC guidelines'],
        correct: 1,
        explanation: 'A paid influencer post must comply with BOTH FTC endorsement rules (requiring disclosure of the material commercial relationship — #ad, #sponsored) AND FDA promotional requirements (fair balance, truthful, non-misleading). Failure to disclose the paid relationship violates FTC guidelines, and making claims without adequate risk information violates FDA/OPDP promotional standards.',
        ref: 'FTC Endorsement Guides (2023); FDA Digital/Influencer Guidance (2024)'
      },
      {
        q: 'A company wants to run a paid search ad on Google: "DrugName — Now Available. See Why Doctors Recommend It." There is no risk information and the link goes to the brand homepage (not the PI). This is:',
        options: ['Compliant because search ads have character limits', 'A violation — product claims in search ads require risk information or a direct PI link', 'Compliant because "Now Available" is a reminder-type statement', 'Compliant as long as the PI is findable on the company website'],
        correct: 1,
        explanation: '"See Why Doctors Recommend It" is a promotional claim that implies efficacy/endorsement. A paid search ad making a drug claim must include risk information or a direct link to the PI (not just the homepage). FDA has issued Untitled Letters and Warning Letters specifically for paid search ads that make claims without adequate risk disclosure.',
        ref: 'FDA Guidance: Internet Advertising (2014); FDA Warning Letters — Search Engine Advertising'
      },
      {
        q: 'Under FDA\'s digital guidance, where must risk information appear relative to efficacy claims in online advertising?',
        options: ['On a separate "safety" page accessible via the main navigation menu', 'No more than one hyperlink click away from any efficacy claim (the "one-click" rule)', 'In the website footer, clearly labeled', 'Risk information only needs to appear on the full prescribing information page'],
        correct: 1,
        explanation: 'FDA\'s digital guidance establishes that risk information must be presented contemporaneously with efficacy claims, or be accessible via a direct hyperlink (one-click). Placing risk information more than one click away from an efficacy claim — for example, buried in a secondary menu or requiring multiple navigation steps — violates the fair balance and non-misleading requirements.',
        ref: 'FDA Guidance: Internet/Social Media Promotions (2014); Updated 2024 Digital DTC Rules'
      }
    ]
  },

  /* ═══════════════════════════════════════════════════
     MODULE 9 — Accelerated Approval Special Rules
  ══════════════════════════════════════════════════ */
  {
    id: 9,
    title: 'Accelerated Approval',
    subtitle: 'Special Promotional Rules for Surrogate-Endpoint Drugs',
    icon: '🚀',
    color: '#059669',
    tags: ['21 CFR 314.550', 'Surrogate Endpoints', 'Pre-Submission', 'Subpart H'],
    description: 'Drugs approved via accelerated approval face the strictest promotional oversight — including mandatory pre-submission of all materials to OPDP before first use.',
    slides: [
      {
        type: 'hero',
        icon: '🚀',
        moduleNum: 'MODULE 9',
        title: 'Accelerated Approval <em>Special Rules</em>',
        subtitle: 'Accelerated approval grants provisional marketing authorization based on a surrogate or intermediate endpoint. Because this approval is conditional, promotional oversight is dramatically heightened.',
        tags: ['21 CFR 314.550', 'Subpart H/E', 'Pre-Submission Required', 'Confirmatory Trial']
      },
      {
        type: 'content',
        label: 'What Is Accelerated Approval?',
        title: 'Accelerated Approval — The Basics',
        body: `
          <div class="highlight-box" style="margin-bottom:20px;">
            <div class="big-text">Provisional Approval</div>
            <p>Approved on a surrogate or intermediate endpoint "reasonably likely to predict" clinical benefit — not actual clinical benefit. Full approval requires a confirmatory trial.</p>
          </div>
          <ul class="rule-list">
            <li>
              <div class="rule-num">📋</div>
              <div class="rule-text">
                <strong>Regulatory Basis: Subpart H (Drugs) / Subpart E (Biologics)</strong>
                <span>21 CFR Part 314 Subpart H (for drugs) and 21 CFR Part 601 Subpart E (for biologics) establish the accelerated approval pathway. Originally created for HIV/AIDS drugs in 1992; now widely used in oncology.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">🔬</div>
              <div class="rule-text">
                <strong>Surrogate Endpoints</strong>
                <span>Examples: tumor response rate (TRR), progression-free survival (PFS), CD4 count, viral load. These are measurable biomarkers that are believed to predict clinical benefit (overall survival, quality of life) but have not yet been proven to do so for that specific drug.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">📅</div>
              <div class="rule-text">
                <strong>Confirmatory Trial Required</strong>
                <span>The manufacturer must conduct a post-marketing confirmatory trial to verify actual clinical benefit. If the trial fails or the drug is withdrawn, the accelerated approval can be revoked. The 2022 Omnibus Reform Act gave FDA new authority to require and expedite confirmatory trial completion.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">⚠️</div>
              <div class="rule-text">
                <strong>Examples</strong>
                <span>Many oncology drugs (including checkpoint inhibitors for various tumor types), some rare disease drugs, and HIV treatments have used this pathway. As of 2024, FDA has granted hundreds of accelerated approvals.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 21 CFR 314.500–314.560 (Subpart H); 21 CFR 601.40–601.46 (Subpart E Biologics)</div>
        `
      },
      {
        type: 'content',
        label: 'Pre-Submission Required',
        title: 'The Critical Difference: Pre-Submission to OPDP',
        body: `
          <div class="alert-box danger" style="margin-bottom:20px;">
            <div class="alert-box-icon">🚨</div>
            <div class="alert-box-content">
              <strong>All Promotional Materials Must Be Submitted BEFORE First Use</strong>
              <p>Unlike standard drugs (where Form FDA 2253 submission is at time of first use), accelerated approval drugs require pre-submission of ALL promotional materials to OPDP for review BEFORE they are used in the marketplace.</p>
            </div>
          </div>
          <table class="compare-table">
            <tr><th>Drug Type</th><th>Submission Timing</th><th>Regulatory Basis</th></tr>
            <tr>
              <td>Standard approval drug</td>
              <td>At time of first use (concurrent)</td>
              <td>21 CFR 314.81(b)(3)(i)</td>
            </tr>
            <tr>
              <td>Accelerated approval drug</td>
              <td>BEFORE first use (pre-submission)</td>
              <td>21 CFR 314.550; 21 CFR 601.45</td>
            </tr>
          </table>
          <ul class="rule-list" style="margin-top:16px;">
            <li>
              <div class="rule-num">1</div>
              <div class="rule-text">
                <strong>Why Pre-Submission?</strong>
                <span>Because accelerated approval is based on surrogate endpoints — not confirmed clinical benefit — FDA needs to ensure companies do not overstate efficacy or minimize the conditional nature of the approval in promotional materials.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2</div>
              <div class="rule-text">
                <strong>OPDP Review Timeline</strong>
                <span>OPDP does not have a legally mandated review deadline for pre-submitted materials (unlike drug applications). In practice, companies should plan for several weeks to months of review time, especially for launch materials.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">3</div>
              <div class="rule-text">
                <strong>All Material Types Covered</strong>
                <span>The pre-submission requirement applies to ALL types: broadcast ads, print ads, digital materials, detail aids, sales training materials, speaker program slides — everything that falls under the definition of promotional labeling or advertising.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 21 CFR 314.550 — Promotional materials; 21 CFR 601.45 — Biologics equivalent</div>
        `
      },
      {
        type: 'content',
        label: 'Promotional Restrictions',
        title: 'What You Can and Cannot Say Under Accelerated Approval',
        body: `
          <div class="cards-grid" style="margin-bottom:20px;">
            <div class="info-card green">
              <span class="info-card-icon">✅</span>
              <h4>Permitted Promotional Claims</h4>
              <p>Claims based on the surrogate endpoint data used to support approval — e.g., "demonstrated a 40% overall response rate." Must accurately describe the surrogate endpoint and its limitations.</p>
            </div>
            <div class="info-card red">
              <span class="info-card-icon">🚫</span>
              <h4>Prohibited Claims</h4>
              <p>Claims implying confirmed clinical benefit (e.g., "proven to extend survival") when only surrogate endpoint data exists. Cannot omit that approval is conditional or based on a surrogate endpoint.</p>
            </div>
          </div>
          <ul class="rule-list">
            <li>
              <div class="rule-num">⚠️</div>
              <div class="rule-text">
                <strong>Must Disclose Surrogate Basis in Promotion</strong>
                <span>Promotional materials for accelerated approval drugs must clearly communicate that the approval is based on a surrogate or intermediate endpoint — not confirmed clinical benefit. Implying full clinical efficacy when only surrogate data exists is a misbranding violation.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">⚠️</div>
              <div class="rule-text">
                <strong>Cannot Promote Beyond Accelerated Approval Indication</strong>
                <span>Even if the company has promising early data for a broader patient population, promotion must stay within the specific, narrowly defined accelerated approval indication.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✅</div>
              <div class="rule-text">
                <strong>After Confirmatory Trial Converts to Full Approval</strong>
                <span>Once the confirmatory trial demonstrates clinical benefit and FDA grants full approval (converting from accelerated to traditional approval), the pre-submission requirement ends. Materials can then be updated to reflect the confirmed clinical benefit data.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 21 CFR 314.550; Omnibus Reform Act of 2022 — Accelerated Approval modernization</div>
        `
      },
      {
        type: 'content',
        label: 'Withdrawal Risk',
        title: 'Accelerated Approval Withdrawals — Promotional Implications',
        body: `
          <div class="alert-box warning" style="margin-bottom:20px;">
            <div class="alert-box-icon">⚠️</div>
            <div class="alert-box-content">
              <strong>Accelerated Approvals Can Be Revoked</strong>
              <p>If a confirmatory trial fails to verify clinical benefit, or if the drug is withdrawn voluntarily or by FDA, all promotional activities must cease immediately and materials must be recalled from the marketplace.</p>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-year">2021–2022</div>
              <h4>FDA Market Withdrawals of Cancer Drugs</h4>
              <p>FDA worked with manufacturers to voluntarily withdraw several oncology indications that had received accelerated approval but whose confirmatory trials failed to verify clinical benefit. This included multiple immunotherapy indications where early response rate data did not translate to survival benefit.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">2022</div>
              <h4>Omnibus Reform Act — Streamlined Withdrawal Authority</h4>
              <p>Congress gave FDA new, streamlined authority to withdraw accelerated approvals more quickly when confirmatory trials fail or are unreasonably delayed — without going through the full withdrawal hearing process previously required.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">Ongoing</div>
              <h4>Compliance Obligation: Monitor Approval Status</h4>
              <p>Manufacturers must actively monitor the status of their accelerated approval. If a withdrawal is announced or a confirmatory trial fails, promotional activities for that indication must stop immediately — even if the drug remains on the market for other approved indications.</p>
            </div>
          </div>
          <div class="cfr-badge">📌 21 CFR 314.560 — Withdrawal procedures | Consolidated Appropriations Act of 2023</div>
        `
      }
    ],
    quiz: [
      {
        q: 'A drug approved under accelerated approval must submit promotional materials to OPDP:',
        options: ['At the time of first use, same as standard drugs', 'BEFORE first use — pre-submission is required', 'Only for DTC advertisements, not HCP materials', 'Once per year in an annual report'],
        correct: 1,
        explanation: 'Under 21 CFR 314.550 (drugs) and 21 CFR 601.45 (biologics), promotional materials for accelerated approval products must be submitted to OPDP BEFORE first use. This is the opposite of the standard requirement (at time of first use) and reflects FDA\'s heightened oversight of drugs approved on surrogate endpoints.',
        ref: '21 CFR 314.550 — Accelerated approval promotional material submission'
      },
      {
        q: 'A drug approved under accelerated approval based on tumor response rate (TRR) wants to run an ad stating it is "proven to extend survival." This is:',
        options: ['Permitted because tumor response rate predicts survival', 'A violation — the drug can only claim surrogate endpoint data; confirmed survival benefit has not been established', 'Permitted if the ad also includes the Brief Summary', 'Permitted as long as a confirmatory trial is ongoing'],
        correct: 1,
        explanation: 'Accelerated approval based on a surrogate endpoint (tumor response rate) does not establish confirmed clinical benefit such as overall survival. Claiming "proven to extend survival" goes beyond the approved labeling and would constitute false or misleading promotion. The ad must accurately represent that approval was based on a surrogate endpoint.',
        ref: '21 CFR 314.550; FD&C Act §502(a) — Misbranding'
      },
      {
        q: 'When a confirmatory trial for an accelerated approval drug fails to verify clinical benefit, the company must:',
        options: ['Continue promotion while filing an appeal', 'Immediately cease promotional activities for that indication', 'Switch all ads to reminder-format only', 'Submit a corrective advertising plan within 90 days'],
        correct: 1,
        explanation: 'When a confirmatory trial fails to verify clinical benefit, the accelerated approval for that indication is subject to withdrawal. Companies must immediately cease promotional activities for the affected indication. The Omnibus Reform Act of 2022 gave FDA streamlined authority to act quickly in these situations.',
        ref: '21 CFR 314.560; Consolidated Appropriations Act of 2023'
      }
    ]
  },

  /* ═══════════════════════════════════════════════════
     MODULE 10 — Regulatory Quick Reference Guide
  ══════════════════════════════════════════════════ */
  {
    id: 10,
    title: 'Regulatory Quick Reference',
    subtitle: 'Key Citations, Guidance Documents & Compliance Checklist',
    icon: '📚',
    color: '#0f172a',
    tags: ['CFR Citations', 'Guidance Documents', 'Compliance Checklist', 'Key Terms'],
    description: 'Your comprehensive regulatory reference: every key CFR citation, active guidance document, critical terminology, and a compliance checklist for promotional materials.',
    slides: [
      {
        type: 'hero',
        icon: '📚',
        moduleNum: 'MODULE 10',
        title: 'Regulatory <em>Quick Reference</em>',
        subtitle: 'Every key citation, guidance document, and compliance concept in one place. Bookmark this module for day-to-day regulatory practice.',
        tags: ['21 CFR 201', '21 CFR 202', 'FD&C Act', 'OPDP Guidance']
      },
      {
        type: 'content',
        label: 'Master Citation Table',
        title: 'Every Key CFR Citation — At a Glance',
        body: `
          <table class="compare-table">
            <tr><th>Topic</th><th>Citation</th><th>What It Covers</th></tr>
            <tr><td>USPI General Format (PLR)</td><td>21 CFR 201.56</td><td>Structure of Highlights, TOC, and Full PI; general labeling requirements</td></tr>
            <tr><td>USPI Specific Content</td><td>21 CFR 201.57</td><td>Required sections, content of each section, Boxed Warning placement</td></tr>
            <tr><td>Pregnancy/Lactation (PLLR)</td><td>21 CFR 201.57(c)(9)</td><td>Narrative pregnancy, lactation, and reproductive potential sections</td></tr>
            <tr><td>Prescription Drug Advertising</td><td>21 CFR 202.1</td><td>All prescription drug advertising requirements</td></tr>
            <tr><td>False/Misleading Ads</td><td>21 CFR 202.1(e)</td><td>Standards for truthfulness and non-misleading promotion</td></tr>
            <tr><td>Brief Summary (print)</td><td>21 CFR 202.1(e)(1)</td><td>Required for all print product claim ads</td></tr>
            <tr><td>Fair Balance</td><td>21 CFR 202.1(e)(3)</td><td>Comparable prominence for benefits and risks</td></tr>
            <tr><td>Broadcast Adequate Provision</td><td>21 CFR 202.1(e)(5)</td><td>Major statement + 4 methods of adequate provision for DTC broadcast</td></tr>
            <tr><td>Reminder Ads</td><td>21 CFR 202.1(e)(6)</td><td>Drug name only; no claims; prohibited for Boxed Warning drugs</td></tr>
            <tr><td>Form FDA 2253 Submission</td><td>21 CFR 314.81(b)(3)(i)</td><td>At-time-of-first-use submission of promotional materials</td></tr>
            <tr><td>Accelerated Approval (Drugs)</td><td>21 CFR 314.550</td><td>Pre-submission requirement for promotional materials</td></tr>
            <tr><td>Accelerated Approval (Biologics)</td><td>21 CFR 601.45</td><td>Pre-submission requirement for biological promotional materials</td></tr>
            <tr><td>Misbranding Prohibition</td><td>FD&C Act §502 (21 U.S.C. §352)</td><td>Core misbranding standard — false or misleading labeling/advertising</td></tr>
            <tr><td>Advertising Authority</td><td>FD&C Act §502(n)</td><td>FDA's specific authority over prescription drug advertising</td></tr>
            <tr><td>Prohibited Acts</td><td>FD&C Act §301</td><td>Interstate commerce prohibition for misbranded drugs; penalties</td></tr>
            <tr><td>HCEI (Payer Communications)</td><td>FDAMA §114</td><td>Healthcare economic information to payers; CRSE standard</td></tr>
          </table>
        `
      },
      {
        type: 'content',
        label: 'Active Guidance Documents',
        title: 'Key FDA Guidance Documents You Must Know',
        body: `
          <ul class="rule-list">
            <li>
              <div class="rule-num">1997</div>
              <div class="rule-text">
                <strong>DTC Broadcast Advertising Guidance</strong>
                <span>Established the major statement + adequate provision framework for TV/radio DTC ads. Still the operative framework for broadcast DTC today.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2004</div>
              <div class="rule-text">
                <strong>Brief Summary in DTC Print Ads</strong>
                <span>Allows consumer-friendly brief summary language (not verbatim USPI) in DTC print ads — must still convey all material risks comprehensibly.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2009</div>
              <div class="rule-text">
                <strong>Presenting Risk Information in Promotion</strong>
                <span>Comprehensive guidance on how risk information must be presented to achieve fair balance — covering audio, visual, prominence, and completeness standards.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2009</div>
              <div class="rule-text">
                <strong>Good Reprint Practices</strong>
                <span>Conditions under which peer-reviewed journal articles about unapproved uses may be distributed — peer-reviewed journals, USPI accompaniment, conflict of interest disclosure.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2011/2023</div>
              <div class="rule-text">
                <strong>Responding to Unsolicited Requests (SIUU)</strong>
                <span>Governs when and how manufacturers can respond to unsolicited HCP requests for off-label information. 2023 update provided additional clarity on what constitutes "unsolicited."</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2014</div>
              <div class="rule-text">
                <strong>Internet & Social Media Promotion (Space-Limited Platforms)</strong>
                <span>Addresses character-limited platforms — companies cannot use space constraints as justification for omitting risk information. One-click access to risk information required.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">2023</div>
              <div class="rule-text">
                <strong>CCN Final Rule — Consistent with Current Labeling</strong>
                <span>Updated Form FDA 2253 requirements; promotional materials must always reflect current approved labeling; electronic submission addressed; accelerated approval pre-submission confirmed.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 All guidance: fda.gov/drugs/guidance-compliance-regulatory-information/guidances-drugs</div>
        `
      },
      {
        type: 'content',
        label: 'Key Terminology',
        title: 'Essential Regulatory Vocabulary',
        body: `
          <div class="cards-grid">
            <div class="info-card">
              <h4>Misbranding</h4>
              <p>Legal term for a drug whose labeling or advertising is false or misleading. The primary legal basis for all OPDP enforcement actions under FD&C Act §502.</p>
            </div>
            <div class="info-card green">
              <h4>Substantial Evidence</h4>
              <p>Standard for efficacy claims: evidence from adequate and well-controlled investigations (typically ≥2 pivotal RCTs). Same standard used for drug approval.</p>
            </div>
            <div class="info-card orange">
              <h4>Material Fact</h4>
              <p>A fact that a reasonable prescriber or patient would consider important in making a treatment decision. Omitting a material fact makes an ad misleading even if all stated facts are true.</p>
            </div>
            <div class="info-card cyan">
              <h4>Intended Use Doctrine</h4>
              <p>FDA determines whether a communication is promotional based on the manufacturer's intended use — inferred from objective evidence including labeling, ads, and employee statements.</p>
            </div>
            <div class="info-card purple">
              <h4>PLR Format</h4>
              <p>Physician Labeling Rule (2006): standardized Highlights + TOC + Full PI structure required for drugs with applications after June 30, 2001 (with phase-in for older drugs).</p>
            </div>
            <div class="info-card red">
              <h4>Park Doctrine</h4>
              <p>Corporate executives can be held personally criminally liable for FDCA violations by subordinates — even without direct knowledge — if they had authority to prevent the violation.</p>
            </div>
            <div class="info-card">
              <h4>CRSE Standard</h4>
              <p>"Competent and Reliable Scientific Evidence" — the evidentiary standard for HCEI under FDAMA §114 (lower than "substantial evidence" for traditional promotional claims).</p>
            </div>
            <div class="info-card green">
              <h4>Surrogate Endpoint</h4>
              <p>A measurable biomarker (e.g., tumor shrinkage, viral load) used in accelerated approval as a proxy for clinical benefit (e.g., survival) — must be confirmed in post-marketing trial.</p>
            </div>
          </div>
        `
      },
      {
        type: 'content',
        label: 'Compliance Checklist',
        title: 'Pre-Launch Promotional Compliance Checklist',
        body: `
          <p style="font-size:14px;color:#475569;line-height:1.7;margin-bottom:16px;">
            Before any promotional piece goes live, verify every item on this checklist:
          </p>
          <ul class="rule-list">
            <li>
              <div class="rule-num">✅</div>
              <div class="rule-text">
                <strong>Claims match current approved USPI</strong>
                <span>Every efficacy and safety claim is sourced to a specific section of the current (not outdated) approved prescribing information. No claims exceed the labeling.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✅</div>
              <div class="rule-text">
                <strong>No off-label promotion</strong>
                <span>The indication, dose, route, population, and duration promoted are all within the approved labeling. Visuals, case studies, and implied scenarios also reflect on-label use only.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✅</div>
              <div class="rule-text">
                <strong>Fair balance achieved</strong>
                <span>Risk information is presented with comparable prominence to benefit claims — same font size in print, same audio quality/speed in broadcast, equal visual prominence.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✅</div>
              <div class="rule-text">
                <strong>All serious risks disclosed</strong>
                <span>All contraindications, Boxed Warning content (if applicable), and major Warnings & Precautions from the USPI are reflected in the brief summary or major statement.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✅</div>
              <div class="rule-text">
                <strong>Correct ad format requirements met</strong>
                <span>Print: brief summary included. Broadcast: major statement + adequate provision (URL, phone, HCP referral). Digital: PI link within one click of any efficacy claim.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✅</div>
              <div class="rule-text">
                <strong>Form FDA 2253 submitted</strong>
                <span>All promotional materials submitted at time of first use. If accelerated approval drug: submitted BEFORE first use. Submission records retained per 21 CFR 314.81.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✅</div>
              <div class="rule-text">
                <strong>MLR review completed and documented</strong>
                <span>Medical, Legal, and Regulatory review conducted and documented. All changes made during review are tracked. Final approved version is the version submitted to FDA and used in market.</span>
              </div>
            </li>
            <li>
              <div class="rule-num">✅</div>
              <div class="rule-text">
                <strong>Comparative claims substantiated</strong>
                <span>Any comparative claim ("vs. Drug B," "superior to," "better than") is supported by adequate, well-controlled, head-to-head data. Cross-study comparisons are not used to imply superiority.</span>
              </div>
            </li>
          </ul>
          <div class="cfr-badge">📌 21 CFR 202.1 | 21 CFR 314.81 | FD&C Act §502</div>
        `
      }
    ],
    quiz: [
      {
        q: 'Which CFR section governs the "fair balance" requirement in prescription drug advertising?',
        options: ['21 CFR 201.56', '21 CFR 202.1(e)(3)', '21 CFR 314.81', '21 CFR 202.1(e)(1)'],
        correct: 1,
        explanation: '21 CFR 202.1(e)(3) is the specific provision establishing the fair balance requirement — that risks and benefits must be presented with comparable prominence in prescription drug advertising. 21 CFR 201.56 covers USPI labeling format, 314.81 covers post-marketing reporting, and 202.1(e)(1) covers the brief summary for print ads.',
        ref: '21 CFR 202.1(e)(3) — Fair balance requirement'
      },
      {
        q: 'Under FDAMA §114, Healthcare Economic Information (HCEI) may be shared with which audience using the "Competent and Reliable Scientific Evidence" standard?',
        options: ['Individual prescribing physicians during sales visits', 'Payers, formulary committees, and similar healthcare management entities', 'Patients and patient advocacy groups', 'FDA review committees during drug approval'],
        correct: 1,
        explanation: 'FDAMA §114 specifically authorizes HCEI to be shared with payers, formulary committees, pharmacy benefit managers, and similar entities that make coverage and formulary decisions. Individual prescribing physicians receiving HCEI during promotional sales visits are subject to standard promotional requirements, not the FDAMA §114 HCEI safe harbor.',
        ref: 'FDAMA §114 (1997) — Healthcare Economic Information'
      },
      {
        q: 'The Park Doctrine means that:',
        options: ['Only the sales representative who made the off-label claim can be prosecuted', 'Corporate executives can face personal criminal liability for FDCA violations even without direct knowledge, if they had authority to prevent them', 'Companies must park all promotional materials with OPDP for 30 days before use', 'FDA must prove intent to deceive before issuing a Warning Letter'],
        correct: 1,
        explanation: 'The Park Doctrine (from U.S. v. Park, 1975) holds that corporate officers can be held criminally liable under the FDCA for violations committed by the corporation or its employees — even without personal knowledge of or participation in the violation — if the officer had authority and responsibility to prevent it. This creates powerful incentives for senior executives to ensure compliance systems are in place.',
        ref: 'U.S. v. Park, 421 U.S. 658 (1975); FD&C Act §301'
      },
      {
        q: 'A company\'s MLR (Medical-Legal-Regulatory) review team approved a promotional brochure 18 months ago. The drug\'s labeling was updated 3 months ago to add a new Boxed Warning. The company continues using the old brochure. This is:',
        options: ['Acceptable because the brochure was properly reviewed when created', 'A violation — the brochure is no longer consistent with the current approved labeling', 'Acceptable if the sales force verbally mentions the new warning', 'Acceptable until the next annual review cycle'],
        correct: 1,
        explanation: 'The 2023 CCN Final Rule reinforces the longstanding requirement that promotional materials must be consistent with the CURRENT approved labeling at the time of use. When labeling is updated — especially when a Boxed Warning is added — promotional materials referencing affected sections must be updated or withdrawn promptly. Continuing to use materials based on outdated labeling constitutes misbranding.',
        ref: '21 CFR 202.1 — CCN Final Rule (2023); FD&C Act §502(a)'
      }
    ]
  }
];
