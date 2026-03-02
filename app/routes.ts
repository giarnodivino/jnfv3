import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("blogs", "routes/blogs.tsx"),
  route("blog/:id", "routes/blog.tsx"),
] satisfies RouteConfig;
