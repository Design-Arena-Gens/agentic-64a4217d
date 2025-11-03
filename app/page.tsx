export default function Page() {
  return (
    <div className="stack-xl">
      <section id="what" className="card hero">
        <h1>What is agent chat?</h1>
        <p>
          Agent chat is a conversational interaction pattern where a person (or system)
          communicates with one or more autonomous software agents to achieve goals.
          These agents can plan, call tools and APIs, collaborate with other agents, and
          execute multi-step tasks ? while keeping the human in the loop through natural
          language.
        </p>
      </section>

      <section id="why" className="card">
        <h2>Why it matters</h2>
        <ul className="bullets">
          <li><strong>Scales cognition</strong>: offload planning and execution to software agents.</li>
          <li><strong>Bridges systems</strong>: agents orchestrate tools, data, and services end-to-end.</li>
          <li><strong>Stays usable</strong>: chat provides an intuitive control surface and audit trail.</li>
        </ul>
      </section>

      <section id="how" className="card">
        <h2>How it works (at a glance)</h2>
        <ol className="steps">
          <li><strong>Intent capture</strong>: user describes the outcome they want.</li>
          <li><strong>Planning</strong>: an agent decomposes the goal into steps.</li>
          <li><strong>Tool use</strong>: the agent invokes tools/APIs to act.</li>
          <li><strong>Observation</strong>: it inspects results and updates state.</li>
          <li><strong>Iteration</strong>: it continues until success, ambiguity, or failure.</li>
          <li><strong>Escalation</strong>: unclear cases are surfaced back to the user.</li>
        </ol>
      </section>

      <section id="when" className="card">
        <h2>When to use agent chat</h2>
        <ul className="bullets">
          <li>Work spans multiple tools, APIs, or data sources.</li>
          <li>Steps depend on intermediate results or decisions.</li>
          <li>Human oversight or approvals are required along the way.</li>
          <li>Auditability and reproducibility of the workflow are important.</li>
        </ul>
      </section>

      <section id="faq" className="card">
        <h2>FAQ</h2>
        <details>
          <summary>Is agent chat the same as a chatbot?</summary>
          <p>
            Not exactly. A traditional chatbot answers questions. An agent can also
            plan and take actions via tools, often across multiple steps.
          </p>
        </details>
        <details>
          <summary>Can multiple agents collaborate?</summary>
          <p>
            Yes. Multi-agent setups route tasks to specialized agents (e.g., research,
            coding, ops) and coordinate them through a shared conversation.
          </p>
        </details>
        <details>
          <summary>Does this require AI models?</summary>
          <p>
            Typically yes. LLMs provide reasoning and language ability; tools provide
            grounded actions. The combination turns instructions into outcomes.
          </p>
        </details>
      </section>
    </div>
  );
}
