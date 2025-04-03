"use client"
import {fetchDataRequest} from "@/store/reducers/slices/exampleSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";

export default function Home() {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state: RootState) => state.example);

    return (
      <div>
          <h1>Redux Saga Example in Next.js</h1>
          {loading ? <p>Loading...</p> : <p>Data: {data}</p>}
          <button onClick={() => dispatch(fetchDataRequest())}>Fetch Data</button>
      </div>
  );
}
