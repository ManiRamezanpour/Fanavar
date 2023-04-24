
const people = [
  {
    name: 'Amir Grajian',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'photo_1402-02-04 23.10.43.jpeg',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Hossein Jafari',
    email: 'michael.foster@example.com',
    role: 'Software Enginer',
   
      imageUrl:
      'photo_1402-02-04 23.10.47.jpeg',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Mani Ramezanpour',
    email: 'dries.vincent@example.com',
    role: 'Fullstack developer',
    imageUrl:
      'Mr.Ramzi pour_2.jpg',
    lastSeen: null,
  },
  {
    name: 'AmirAli Robatjazi',
    email: 'lindsay.walton@example.com',
    role: 'Cloud Enginer , backend developer',
    imageUrl:
      '1402-02-04 23.08.57.jpg',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
]

// export default function OurTeams() {
//   return (
//     <ul role="list" className="divide-y divide-gray-100 px-24">
//       {people.map((person) => (
//         <li key={person.email} className="flex justify-between gap-x-6 py-5">
//           <div className="flex gap-x-4">
//             <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
//             <div className="min-w-0 flex-auto">
//               <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
//               <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
//             </div>
//           </div>
//           <div className="hidden sm:flex sm:flex-col sm:items-end">
//             <p className="text-sm leading-6 text-gray-900">{person.role}</p>
//             {person.lastSeen ? (
//               <p className="mt-1 text-xs leading-5 text-gray-500">
//                 Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
//               </p>
//             ) : (
//               <div className="mt-1 flex items-center gap-x-1.5">
//                 <div className="flex-none rounded-full bg-emerald-500/20 p-1">
//                   <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
//                 </div>
//                 <p className="text-xs leading-5 text-gray-500">Online</p>
//               </div>
//             )}
//           </div>
//         </li>
//       ))}
//     </ul>
//   )
// }

// const people = [
//   {
//     name: 'Leslie Alexander',
//     role: 'Co-Founder / CEO',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
//   // More people...
// ]

export default function OurTeams() {
  return (
    <div className="bg-white px-24">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Teams</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
