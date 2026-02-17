import { ComponentExample } from "@/components/component-example"

export function ComponentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Component Showcase</h1>
        <p className="text-muted-foreground">
          Reference examples from the shared UI library.
        </p>
      </div>
      <ComponentExample />
    </div>
  )
}
