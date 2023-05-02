import "./Message.css";

import { FunctionComponent } from "react";
import { Button, Card } from "..";
import { useAppDispatch } from "../../store";
import { resetState } from "../../reducers/imageReducer";

interface MessageArgs {
  description: string;
  title: string;
}
const Message: FunctionComponent<MessageArgs> = ({ description, title }) => {
  const dispatch = useAppDispatch();
  return (
    <Card className="Message">
      <>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="btn-container">
          <Button
            text="Go home"
            to={"/"}
            type="link"
            onClick={() => dispatch(resetState(false))}
          />
        </div>
      </>
    </Card>
  );
};

export default Message;
