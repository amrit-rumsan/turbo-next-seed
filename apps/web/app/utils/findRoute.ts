import { Route } from "@repo/ui/routeConfig";

// Define the match result type
type RouteMatch = {
  component: React.ComponentType<any>;
  params: Record<string, string>;
};

/**
 * Recursively traverse the route configuration to find a matching route.
 * @param segments - The URL segments to match.
 * @param routes - The route configuration array.
 * @param routeParams - Accumulated dynamic route parameters.
 * @returns A match result with a component and captured parameters, or null if no match.
 */

export const findRoute = (
    segments: string[],
    routes: Route[],
    routeParams: Record<string, string> = {}
  ): RouteMatch | null => {
    if (!segments.length) return null;
  
    for (const route of routes) {
      // If the route's path is dynamic (e.g., ":projectId")
      if (route.path.startsWith(":")) {
        const paramName = route.path.slice(1);
        const newParams = { ...routeParams, [paramName]: segments[0] ?? ""};
  
        if (segments.length === 1) {
          if (route.component) {
            return { component: route.component, params: newParams };
          }
        } else if (route.children) {
          const childMatch = findRoute(segments.slice(1), route.children, newParams);
          if (childMatch) {
            return childMatch;
          }
        }
      } else if (route.path === segments[0]) {
        if (segments.length === 1) {
          if (route.component) {
            return { component: route.component, params: routeParams };
          }
        } else if (route.children) {
          const childMatch = findRoute(segments.slice(1), route.children, routeParams);
          if (childMatch) {
            return childMatch;
          }
        }
      }
    }
    return null;
  };