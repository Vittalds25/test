import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Test Answers
      </h1>
      <p className="mb-4">
        {`1. From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.`}
      </p>
      <p className="mb-4">
        {`Ans: 
5 most favourite – 
1.Respond to 25+ support requests via email every day.- I love to get to know issues and their root causes, if we have more tickets the probability of getting new issues are more and that would help me gain more knowledge and skills.
2.Dig through logs to troubleshoot a customer's broken project. - I always prefer to fix the issue myself by going through the logs and knowing what might have caused the issue, for instance if the user has made some mistakes that led to and error we would easily get those on logs and update the user on the same.
3.Write and maintain support articles and docs pages. - This is a very important and useful task which would reduce our burden in training the new recruits or adding this as a self assist document for the users.
4.Analyze hundreds of support tickets to spot trends the product team can use - This is a very helpful task that would help us in reducing the tickets flow. If we are getting similar tickets that means the product is not built in a user friendly way and we would have to get this to product team and have them work on it.
5.Work with engineering teams during incidents and provide updates to internal and external stakeholders. - This is very important task as the user will be waiting for an update, imagining myself in the place of the user I would want some solution right away and if I get to connect with the right person then I would be able to help the user ASAP.

5 least favourite support tasks –
1.Manage a support team – I’m not that good enough yet to manage a support team, I love to work on issues and concentrate more on the tickets and the tasks given to me.
2.Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems. - This would make the user think that there are more issues. I prefer to have a private discussion with the user unless we are discussing the same issue with all the users.
3.Find and recruit teammates for the support team - I would love to take interviews an recruit teammates but this would be my least priority.
4.Help train and onboard new support teammates - This will be helpful for both the new joinee and me but I prefer to build confluences which would help the new joinee learn just by referring to it so it saves both of our time.
5.Work with the product team to develop a new feature based on feedback from customers. - I prefer more to work on issues than enhancement requests as the issues are the ones on which the customer is still blocked on.

`}
      </p>
      <p className="mb-4">
        {`2. What do you want to learn or do more of at work?`}
      </p>
      <p className="mb-4">
        {`Ans: I would love to learn next.js more and have more knowledge on it so that I can become a key resource who can help users with their questions and issues.
I’m very interested in learning new things and overcoming hurdles.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
