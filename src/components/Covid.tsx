import styled from "styled-components";
import type { State } from "../interfaces/State";

const AllStatesDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;

const SingleStateDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 30%;
    box-sizing: border-box;

    padding: 2%;
    margin: 1%;

    background-color: rgb(44 16 23 / 0.59);
    color: #e8e3e3;
    border: 3px #e36884 solid;
    border-radius: 1vw;
    font: italic small-caps bold calc(2px + 1vw) serif;
    text-align: center;

    p {
        margin: 0.5% 0;
    }
    h1{
        text-decoration: underline;
    }
`;

export default function Covid(props: { data: State[] }) {
    return (
        <AllStatesDiv>
            {
                props.data.map((state: State) =>
                    <SingleStateDiv key={state.state}>
                        <h1>{state.state}</h1>
                        <p>Latest Recorded Population: {state.population}</p>
                        <p>Cases (total): {state.cases}</p>
                        <p>Deaths (total): {state.deaths}</p>
                        <p>New Cases (today): {state.todayCases}</p>
                        <p>New Deaths (today): {state.todayDeaths}</p>
                        <p>Active cases: {state.active}</p>
                        <p>Critical cases: {state.critical}</p>
                    </SingleStateDiv>
                )
            }
        </AllStatesDiv>
    );
}
