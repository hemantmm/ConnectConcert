// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <main
//       className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
//     >
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">pages/index.js</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Discover and deploy boilerplate example Next.js&nbsp;projects.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }



import { useEffect, useState } from "react"
import SDK from "weavedb-sdk"
import { ethers } from "ethers"
import lf from "localforage"
import { isNil } from "ramda"

export default function Home() {
  const contractTxId = "L8rEX1QfZfRK93vJ2f5M3aMeDlUBsq2McInpRtmrZ_w"
  const sonarLink = `https://sonar.warp.cc/?#/app/contract/${contractTxId}`
  const COLLECTION_PEOPLE = "people"
  // State variables storing string values of name, age, and doc ID.
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [docId, setDocId] = useState("")
  // State variable storing an array of people data
  const [people, setPeople] = useState([])
  // State variable storing the weavedb-sdk object
  const [db, setDb] = useState(null)
  // State variable storing a boolean value indicating whether database initialization is complete.
  const [initDb, setInitDb] = useState(false)
  const [user, setUser] = useState(null)

  const checkUser = async () => {
    const wallet_address = await lf.getItem(`temp_address:current`)
    if (!isNil(wallet_address)) {
      const identity = await lf.getItem(
        `temp_address:${contractTxId}:${wallet_address}`
      )
      if (!isNil(identity)) {
        setUser({
          wallet: wallet_address,
          privateKey: identity.privateKey,
        })
      }
    }
  }

  const setupWeaveDB = async () => {
    try {
      const _db = new SDK({
        contractTxId: contractTxId,
      })
      await _db.init()
      setDb(_db)
      setInitDb(true)
    } catch (e) {
      console.error("setupWeaveDB", e)
    }
  }

  const login = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum, "any")
    const signer = await provider.getSigner()
    await provider.send("eth_requestAccounts", [])
    const wallet_address = await signer.getAddress()
    let identity = await lf.getItem(
      `temp_address:${contractTxId}:${wallet_address}`
    )

    let tx
    let err
    if (isNil(identity)) {
      ; ({ tx, identity, err } = await db.createTempAddress(wallet_address))
      const linked = await db.getAddressLink(identity.address)
      if (isNil(linked)) {
        alert("something went wrong")
        return
      }
    } else {
      await lf.setItem("temp_address:current", wallet_address)

      setUser({
        wallet: wallet_address,
        privateKey: identity.privateKey,
      })
      return
    }
    if (!isNil(tx) && isNil(tx.err)) {
      identity.tx = tx
      identity.linked_address = wallet_address
      await lf.setItem("temp_address:current", wallet_address)
      await lf.setItem(
        `temp_address:${contractTxId}:${wallet_address}`,
        JSON.parse(JSON.stringify(identity))
      )
      setUser({
        wallet: wallet_address,
        privateKey: identity.privateKey,
      })
    }
  }

  const logout = async () => {
    await lf.removeItem("temp_address:current")
    setUser(null, "temp_current")
    console.log("<<logout()")
  }

  const handleLoginClick = async () => {
    try {
      login()
      console.log("<<handleLoginClick()")
    } catch (e) {
      console.error("handleLoginClick", e)
    }
  }

  const handleAddClick = async () => {
    const _people = { name: name, age: Number(age) }

    try {
      const res = await db.add(
        _people,
        COLLECTION_PEOPLE,
        ...(user !== null ? [user] : [])
      )
      getPeople()
      console.log(res)
    } catch (e) {
      console.error(e)
    }
  }

  const handleSetClick = async () => {
    const _people = { name: name, age: Number(age) }

    try {
      const res = await db.set(
        _people,
        COLLECTION_PEOPLE,
        docId,
        ...(user !== null ? [user] : [])
      )
      getPeople()
      console.log(res)
    } catch (e) {
      console.error(e)
    }
  }

  const handleUpsertClick = async () => {
    const _people = { name: name, age: Number(age) }

    try {
      const res = await db.upsert(
        _people,
        COLLECTION_PEOPLE,
        docId,
        ...(user !== null ? [user] : [])
      )
      getPeople()
      console.log(res)
    } catch (e) {
      console.error(e)
    }
  }

  // Function to retrieve all people data from the database.
  const getPeople = async () => {
    try {
      const res = await db.cget(COLLECTION_PEOPLE)
      setPeople(res)
      console.log("getPeople()", res)
    } catch (e) {
      console.error(e)
    }
  }

  // Effect hook to initialize the database object on component mount.
  useEffect(() => {
    checkUser()
    setupWeaveDB()
  }, [])

  // Effect hook to retrieve people data from the database on database initialization.
  useEffect(() => {
    if (initDb) {
      getPeople()
    }
  }, [initDb])

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <a href={sonarLink} target="_blank" rel="noopener noreferrer">
          Contract Transactions
        </a>
        <br />
        <br />
        <p>{initDb ? "WeaveDB is Ready" : "WeaveDB SDK is not initialized"}</p>
        {!isNil(user) ? (
          <button onClick={logout}>
            {user.wallet.slice(0, 5)}...{user.wallet.slice(-5)}
          </button>
        ) : (
          <button onClick={handleLoginClick}>Connect Wallet</button>
        )}
        <br /> <br />
        <label>Name</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Age</label>
        <input
          placeholder="Age"
          value={age}
          type="number"
          onChange={(e) => setAge(e.target.value)}
        />
        <br /> <br />
        <button onClick={handleAddClick}>ADD</button>
        <br /> <br />
        <label>Document ID</label>
        <input
          placeholder="DocId"
          value={docId}
          onChange={(e) => setDocId(e.target.value)}
        />
        <br />
        <button onClick={handleSetClick}>SET</button>
        <br />
        <button onClick={handleUpsertClick}>UPSERT</button>
        <br /> <br />
        <table cellPadding="8px">
          <thead>
            <tr align="left">
              <th>Name</th>
              <th>Age</th>
              <th>DocId</th>
            </tr>
          </thead>
          <tbody>
            {people.map((item, index) => (
              <tr key={index}>
                <td>{item.data.name}</td>
                <td>{item.data.age}</td>
                <td>{item.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}