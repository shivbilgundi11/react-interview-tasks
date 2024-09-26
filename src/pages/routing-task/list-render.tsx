type ListItem = {
  id: number;
  title: string;
  year: number;
};

interface List {
  list: ListItem[];
}

export default function ListRender({ list }: List) {
  return (
    <>
      <div className="flex h-auto w-full flex-col items-center justify-center gap-y-2">
        {list &&
          list.map(({ id, title, year }) => {
            return (
              <div
                key={id}
                className="flex h-auto w-full items-center gap-x-2 text-2xl font-medium"
              >
                <h2>
                  {id}. {title}
                </h2>
                <p>{year}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}
