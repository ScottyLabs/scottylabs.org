# Team data

`team.ts` holds the leadership roster rendered at `/team`. Name, role, year, and LinkedIn URL are edited directly in the TypeScript source. `history.ts` holds the year-by-year carousels and article links rendered at `/over-the-years`.

## Assets

Assets are stored in object storage. Three prefixes are in use:

- `https://assets.scottylabs.org/team-page/<filename>`: leadership headshots, referenced from `PEOPLE.<id>.photo` by filename.
- `https://assets.scottylabs.org/team-page/history/<filename>`: `/over-the-years` carousel images, referenced from `HISTORY[].photos[].filename`.
- `https://assets.scottylabs.org/legal/<filename>`: nonprofit legal documents (IRS determination letter, articles of incorporation, Form 1023-EZ) linked from the site footer in `apps/web/app/sections/home/Footer.tsx`.

The bucket is anonymously readable; do not upload anything that should not be public.

1. Read the writer credentials on infra-01

```bash
sudo tofu -chdir=/var/lib/tofu-garage output -raw scottylabs_assets_writer_access_key_id
sudo tofu -chdir=/var/lib/tofu-garage output -raw scottylabs_assets_writer_secret_access_key
```

2. Upload to the bucket

From a shell with `aws` available (e.g. `nix-shell -p awscli2`):

```bash
export AWS_ACCESS_KEY_ID=<step 1 access key>
export AWS_SECRET_ACCESS_KEY=<step 1 secret>

# Single headshot
aws s3 cp /path/to/photo.jpg \
  s3://scottylabs-assets/team-page/AnishPallati.jpg \
  --endpoint-url https://s3.scottylabs.org \
  --content-type image/jpeg

# Single history image
aws s3 cp /path/to/photo.png \
  s3://scottylabs-assets/team-page/history/TH2026.png \
  --endpoint-url https://s3.scottylabs.org \
  --content-type image/png
```

`--content-type` must match the file extension. Supported values: `image/jpeg`, `image/png`, `image/avif`, `image/webp`.

Filename convention: PascalCase by subject, no spaces, including extension. Filenames are case-sensitive.

3. Reference the image in source

For a headshot, in `team.ts`:

```ts
"anish-pallati": {
  name: "Anish Pallati",
  photo: "AnishPallati.jpg",
  linkedin: "https://www.linkedin.com/in/anish-pallati/",
},
```

Maintain alphabetical order by key. The renderer constructs `https://assets.scottylabs.org/team-page/${photo}`. Omitting `photo` causes the card to render the person's initials.

For a history image, in `history.ts`:

```ts
{
  type: "carousel",
  year: "2025-26",
  photos: [
    { filename: "TH2026.png" },
    { filename: "Banner2026.png", caption: "Some caption" },
  ],
},
```

The renderer constructs `https://assets.scottylabs.org/team-page/history/${filename}`. `caption` is optional per photo.

4. Verify

```bash
curl -I https://assets.scottylabs.org/team-page/AnishPallati.jpg
curl -I https://assets.scottylabs.org/team-page/history/TH2026.png
```

Expect `HTTP/2 200` and a `content-type` header that matches the extension.
