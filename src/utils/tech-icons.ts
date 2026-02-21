const TECH_ICON_RULES: Array<[RegExp, string]> = [
  [/\bnode\.?js\b/, "nodejs"],
  [/\bgolang\b|\bgo\b/, "golang"],
  [/\bc#\b|\.net|asp\.net|\bdotnet\b/, "csharp"],

  [/react|next\.js|astro|html|css/, "layout"],
  [/nestjs|express|fastify|gin|backend|node|api/, "server"],
  [/socket|websocket|grpc|rpc|service mesh|network/, "network"],

  [/docker|kubernetes|eks|openshift|ocp|aws|terraform|argocd|gitops|helm|nginx|ingress|linux|gnu\/linux/, "cloud"],
  [/devops|ci\/cd|pipeline|git\b|github|gitlab/, "terminal"],

  [/prometheus|grafana|jaeger|tracing|monitor|alert|sla|observability|elk|log/, "target"],
  [/mysql|postgres|oracle|redis|elasticache|mongodb|mongo|elasticsearch|rds|database|scylla/, "database"],
  [/kafka|nats|queue|broker|messaging/, "mail"],
];

export function getTechIcon(label: string): string {
  const value = label.trim().toLowerCase();
  for (const [pattern, icon] of TECH_ICON_RULES) {
    if (pattern.test(value)) return icon;
  }
  return "code";
}
