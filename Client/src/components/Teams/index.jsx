
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
export default function OurTeams() {
  return (
    <div className="bg-white md:px-24">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 md:px-8 xl:grid-cols-3">
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
