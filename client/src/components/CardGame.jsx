import kanon from '../assets/kanon-gaming.jpg'

const CardGame = ({ games }) => {
    return (
        <article className="grid grid-cols-3 m-5">
            {games?.map((e) => (
                <div>
                    <h1>{e.title}</h1>
                    <figure>
                        <img src={e.thumb?.url ? `https:${e.thumb?.url}` : kanon} alt={e.title} />
                    </figure> ''
                </div>
            ))}
        </article>
    );
};

export default CardGame;
