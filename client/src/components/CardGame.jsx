import kanon from '../assets/kanon-gaming.jpg'

const CardGame = ({ games }) => {
    return (
        <article className="grid grid-cols-3 my-5 mx-auto rounded-md">
            {games?.map((e) => (
                <div className='p-2 rounded-md'>
                    <h1 className='text-center mb-2 text-lg font-semibold'>{e.title}</h1>
                    <figure className='object-fill'>
                        <img src={e.thumb?.url ? `https:${e.thumb?.url}` : kanon} alt={e.title} className='object-fill w-full'/>
                    </figure>
                </div>
            ))}
        </article>
    );
};

export default CardGame;
