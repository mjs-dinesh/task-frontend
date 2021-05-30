import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { TEST_ACTION } from "utils/types.utils";
import { useSetState } from "utils/common.utils";
import { reducers } from "interfaces/common.interface";
import './test.component.scss';

export default function Test() {
  const test = useSelector((state: reducers) => state.test)
  const [state, setState] = useSetState({})
  const dispatch = useDispatch();

  useEffect(() => {
  }, []);

  const handleTest = () => {
    dispatch({
      type: TEST_ACTION,
      payload: {
        foo: 'bar',
        test: "testttt"
      }
    })
  }

  

  return (
    <div>
      <div className="test_container">
        test
      </div>
    </div>
  )
}
