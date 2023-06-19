import Recommendation from "./Recommendation";
export const runtime = 'edge' // 'nodejs' (default) | 'edge'
type Props = {
    name: string;
};
const Recommendations = async ({name}: Props) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return (
        <div className="columns-1">
            <h1>Recommendations for {name}</h1>
            <ul className="list-disc">
                {/** @ts-ignore */}
                <li><Recommendation /></li>
                {/** @ts-ignore */}
                <li><Recommendation /></li>
                {/** @ts-ignore */}
                <li><Recommendation /></li>
                {/** @ts-ignore */}
                <li><Recommendation /></li>
            </ul>
        </div>
    )
}

export default Recommendations;

