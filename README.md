# MNF Toolkit

A toolkit for tracking stats, managing squad rotations, and visualizing performance metrics for Maidenhead Monday Night Football.

## Features
- Match history tracking
- Player performance analytics
- Team balancing suggestions
- League table statistics

## Updating Match Data

1. Add new match data to [`resources/match_data.edn`](resources/match_data.edn):
```clojure
{:match-id <next-number>
 :date #inst "YYYY-MM-DDT00:00:00.000-00:00"
 :team-colours-data {:goals <number>
                     :shooting-at-railway <0|1>
                     :players #{"Player1" "Player2" ...}}
 :team-bibs-data {:goals <number>
                  :shooting-at-railway <0|1>
                  :players #{"Player3" "Player4" ...}}}
```

2. Update player data in [`resources/players.edn`](resources/players.edn) if needed.

3. Rebuild the processed data:
```clojure
clj
(require '[mnf-toolkit.data.constructor :as constructor])
(constructor/build-and-store-data!)
```

## Local Testing

### PHP Version

```bash
cd public && php -S localhost:8000
```

### Development Build
```bash
# Start shadow-cljs watch
npx shadow-cljs watch app-dev
```

```clojure
;; In another terminal, start local server
clj -M:dev
(require '[user])

;; Start the server
(def stop-server (start-server))
;; Stop the server
(stop-server)
```
Visit `http://localhost:3000`

### Production Build
```bash
# Build production version
npx shadow-cljs release app-prod

# Start local server
python -m http.server 8000 --directory docs
```
Visit `http://localhost:8000`

## Deployment

The site is configured for GitHub Pages deployment from the `docs/` directory. To deploy:

1. Build production version:
```bash
npx shadow-cljs release app-prod
```

2. Commit and push changes:
```bash
git add .
git commit -m "Update site"
git push origin main
```

## Project Structure

- `src/mnf-toolkit/`
  - [`calcs.clj`](src/mnf-toolkit/calcs.clj) - Core calculation logic
  - [`data/`](src/mnf-toolkit/data/)
    - [`constructor.clj`](src/mnf-toolkit/data/constructor.clj) - Data processing pipeline
    - [`validation.clj`](src/mnf-toolkit/data/validation.clj) - Input data validation
    - [`output_tables.clj`](src/mnf-toolkit/data/output_tables.clj) - Table generation
  - [`frontend/`](src/mnf-toolkit/frontend/)
    - [`site.clj`](src/mnf-toolkit/frontend/site.clj) - Frontend UI components

## License

This project is released into the public domain under [The Unlicense](LICENSE).
