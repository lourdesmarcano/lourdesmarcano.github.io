# Lourdes Marcano — scientific website

Free hosting: **https://lourdesmarcano.github.io/**

The website is entirely in English. It uses plain HTML, CSS and a little JavaScript. GitHub builds and publishes it automatically; no subscription, domain purchase or software installation is needed to make routine changes.

## Make a change in GitHub

1. Open `content.json` and click the pencil (Edit).
2. Change the text between quotation marks. Keep the commas and brackets.
3. Click **Commit changes**. The **Publish scientific website** action rebuilds the site, normally within a few minutes.

If a build fails, the last working website stays online. Open **Actions** to see the error. GitHub keeps previous versions of every edit.

### Add a publication

Copy one complete object inside `publications`. Update its title, journal, bibliographic year, authors, DOI and short scientific summary. `selected: true` places it in Selected Publications; `false` leaves it in All Publications. Themes for the Research and Projects illustrations: `chain`, `crystal`, `light`, `heat`, `protein`, `tomography`, `field`, `scattering`.

For an accepted paper without a DOI, keep `doi`, `volume`, `issue` and `pages` empty and use `status: "Accepted · In press"`. Never invent final bibliographic data. Set `kind` to `Article` or `Chapter`.

The `pdf` field is optional. Add only an external URL to an authorised open-access or repository PDF; keep it empty otherwise. Do not upload subscription PDFs.

### Add a project

Copy an object inside `projects`. Include **only** your own PI grants or individual fellowships. Use the exact documented role (an MSCA Fellow is not automatically a PI). Keep funding amounts and periods consistent with official records. Put the newest project first. A translated descriptive title can be used where an English official title does not exist.

### Update the biography or links

Edit `bio`, `tagline`, `email` or `links` in `content.json`. The two biography paragraphs are separated by `\n\n`.

### Replace a photograph

Use **Add file → Upload files** to replace `portrait-large.webp` and `portrait-small.webp` with files of the same names. Recommended widths: approximately 900 and 600 pixels. Replace `portrait-social.jpg` for sharing previews. Use an image you own or have permission to publish. Remove private metadata before uploading.

### Update outreach, research or the timeline

These page texts are in `build.py`, in the clearly labelled `outreach`, `research` and `timeline` sections. Edit the English text and commit. Do not alter the surrounding quotes or HTML tags. For changes to colours or spacing, edit `style.css`.

## Local preview (optional)

Python 3 is the only build dependency:

```sh
python3 build.py
python3 -m http.server 8000 --directory _site
```

Open http://localhost:8000/. `_site` contains only public website files; administrative documents and CV PDFs are deliberately excluded.

## Publication and image policy

Bibliography is reconciled by DOI against the supplied CVA and Crossref/publisher records. Definitive volume years are used when available. An accepted Advanced Functional Materials article is explicitly marked in press without invented DOI, volume or pages. Scientific summaries describe the published study, not an unsupported claim about an individual's specific contribution.

The portrait was supplied by Lourdes Marcano for this website. Research and Projects use original conceptual SVG illustrations. Publication cards use the original graphical abstracts, cover illustrations or article figures, labelled and credited individually. `image_rights` links to the applicable licence or publisher author-reuse policy; `image_source` records provenance. Only the extracted images are hosted; no protected article PDFs are hosted. Paper PDFs, where included, are external authorised versions.

To add an article graphic, place the original image beside `content.json` and add `image` (filename), `image_label` (Graphical abstract, Cover illustration or Figure number), `image_alt`, `image_credit`, `image_rights`, `image_source`, `image_width` and `image_height` to that publication. Check reuse rights first. Images are shown complete, without cropping; visitors can open the full-size original. If no verified image is available, the card remains text-only.

Funding information is based on the CVA and public records from the University of Oviedo, Fundación BBVA and CORDIS. Project periods follow the CVA's actual activity dates; ProteNano-MAG uses its actual end date rather than the originally scheduled end. The PI-only selection excludes grants in which Lourdes was a team member. Funding source links are on the project cards.

No identity documents, administrative certificates, private contact details or confidential proposal content are included.
