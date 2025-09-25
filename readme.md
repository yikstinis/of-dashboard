## Getting Started

You may need:

- node v22.19.0
- npm v10.9.3

If you have it - clone repository and install dependencies:

```bash
git clone https://github.com/yikstinis/of-dashboard.git
cd of-dashboard
npm install
```

### NPM Scripts

- `lint` - checks code style
- `test` - tests existing code
- `start` - runs local server for development
- `build` - creates production ready bundle

## Project Structure

The project follows a modular structure for better maintainability.

```
public/          # Static withought compilation
src/             # Source application code
  components/    # Reusable stupid components
  constants/     # Application-level constants
  containers/    # Smart containers with logic and layouts
  store/         # Redux store for global state management
  helpers/       # Utility functions with no context
  hooks/         # Global react hooks
  icons/         # Icons for usage inside components
  styles/        # Root application styles like reset
```

You are able to start slicing it in future, when it become bigger.
