import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Formularz = () => {
  /*



  const fetchData = (delay: number): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Dane zostały pobrane");
      }, delay);
    });
  };
  
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleClick = async () => {
    setLoading(true);
    try {
      const result = await fetchData(3000);
      setData(result);
      console.log(result);
    } catch (error) {
      console.error("Błąd", error);
    } finally {
      setLoading(false);
    }
  };
  
*/

  type FormValues = {
    username: string;
    email: string;
    number: number;
  };

  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="flex justify-items-center">
      <form className="" onSubmit={() => handleSubmit}>
        <div className="flex-col justify-between: space-y-5">
          <div className="form-control">
            <p className="flex">Username:</p>
            <input
              type="text"
              id="username"
              className="text-center"
              {...register("username", { required: true, maxLength: 20 })}
            />
            <p>{errors.username?.message}</p>
          </div>
          <div>
            <p className="flex">Email:</p>
            <input
              type="email"
              id="email"
              className="text-center"
              {...register("email", { pattern: /^[A-Za-z]+$/i })}
            />
            <p className="">{errors.email?.message}</p>
          </div>
          <div>
            <p className="flex">Phone Number:</p>
            <input
              type="text"
              id="number"
              className="text-center"
              {...register("number", { min: 18, max: 99 })}
            />
            <p>{errors.number?.message}</p>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <DevTool control={control} />

      <div>
        <button>Odejmij</button>
        <button>Dodaj</button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default Formularz;
