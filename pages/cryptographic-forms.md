# A Scheme for Cryptographic Validation of Legal Forms

## Impetus

Suppose Alice is attempting to create an agreement to sell her house to Bob. This is a complicated and difficult agreement to execute, involving the local, state, and federal governments, insurance companies, and likely banks (as Bob will probably pay for the house with a mortgage). Accordingly, Alice retains the services of an agent, Eve, to represent her interests through the process of arranging the transaction. Little does Alice realize, however, that Eve is not a trustworthy agent. In preparing the legal documents for Alice, Eve discretely inserts a clause which results in Eve rather than Alice receiving Bob's money once the document is executed. Alice's only defense is to read and understand the documents prior to signing, which negates a considerable portion of Eve's original value proposition as an agent in the first place.

There are plenty of traditional trust-economy approaches to preventing such things from happening. Alice might have researched Eve in advance. There might be a regulatory commission in place to ensure that persons in Eve's position are licensed, an expensive revokable credential that's at stake when Eve prepares legal agreements. Eve might be employed by a large firm with a good reputation and know motivation to matintain it. However, I believe that combination of a trusted third party and a cryptographic approach can obviate need for Alice to make the frustrating decision between trusting Eve and doing all the work herself.

## Concept: A Cryptographically-signed Template

What if, in lieu of doing all the intellectual work of understanding her contract or trusting Eve, Alice could rely on a trustworthy third party to provide a contract? As it happens, there actually is a trustworthy third party available: the United States Government. The indemnification provided by a contract is only valid insofar as all signatory parties can trust the government to respect and enforce such agreements.

Suppose the government provided a template for a real estate transaction. Moreover, suppose that it promulgated a cryptographic hash associated with the correct template (much like you can get the checksum from reputable software packages to ensure that they haven't been tampered with). Then all Alice needs to do to confirm that Eve has not tampered with the contract is to generate the checksum herself and compare to the checksum published by the government.

The problem arises when Eve does some of the work of filling out the contract (which is essentially what she's been hired to do). Now the document is distinct from the unedited form, meaning the simple checksum won't match. What we need is a scheme for correctly hashing the form while preserving the data that's been filled into it independently.
