import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`1. From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
