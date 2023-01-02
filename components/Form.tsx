'use client';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Form = () => {
  const messageInput = useRef<HTMLTextAreaElement | null>(null);
  const [response, setResponse] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [models, setModels] = useState<any[]>([]);
  const [currentModel, setCurrentModel] = useState('text-davinci-003');

  const handleEnter = (
    e: React.KeyboardEvent<HTMLTextAreaElement> &
      React.FormEvent<HTMLFormElement>
  ) => {
    if (e.key === 'Enter' && isLoading === false) {
      e.preventDefault();
      setIsLoading(true);
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = messageInput.current?.value;
    if (message !== undefined) {
      const initialResponse: string[] = [...response, message];
      setResponse(initialResponse);
      messageInput.current!.value = '';
    }

    if (!message) {
      return;
    }

    const { data } = await axios.post('/api/response', {
      message,
      currentModel,
    });
    const totalResponse: string[] = [...response, message, data.bot];
    setResponse(totalResponse);
    localStorage.setItem('response', JSON.stringify(totalResponse));
    setIsLoading(false);
    messageInput.current!.value = '';
  };

  const handleReset = () => {
    localStorage.removeItem('response');
    setResponse([]);
  };

  useEffect(() => {
    const storedResponse = localStorage.getItem('response');
    if (storedResponse) {
      setResponse(JSON.parse(storedResponse));
    }
  }, []);

  const fetchModels = async () => {
    const models = setModels((await (await fetch('/api/models')).json()).data);
  };

  useEffect(() => {
    fetchModels();
  }, []);

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentModel(e.target.value);
  };

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col fixed left-5 top-5'>
        <select
          onChange={handleModelChange}
          className='outline-none border-none p-4 rounded-md bg-white text-gray-500 dark:hover:text-gray-400 dark:hover:bg-gray-900'
        >
          {models.map((model) => (
            <option
              key={model.id}
              value={model.id}
              defaultValue='text-davinci-003'
            >
              {model.id}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleReset}
        type='reset'
        className='fixed top-5 right-5 p-4 rounded-md bg-white text-gray-500 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent'
      >
        Clear History
      </button>
      <div className='w-full mx-2 flex flex-col items-start gap-3 pt-6 last:mb-6 md:mx-auto md:max-w-3xl'>
        {isLoading
          ? response.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-blue-500' : 'bg-gray-500'
                  } p-3 rounded-lg`}
                >
                  <p>{item}</p>
                </div>
              );
            })
          : response
          ? response.map((item: string, index: number) => {
              return (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-blue-500' : 'bg-gray-500'
                  } p-3 rounded-lg`}
                  // style={{ textAlign: index % 2 === 0 ? 'left' : 'right' }}
                >
                  <p>{item}</p>
                </div>
              );
            })
          : null}
      </div>
      <form
        onSubmit={handleSubmit}
        className='fixed bottom-0 w-full md:max-w-3xl bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] mb-4'
      >
        <textarea
          name='Message'
          placeholder='Type your query'
          ref={messageInput}
          onKeyDown={handleEnter}
          className='w-full resize-none bg-transparent outline-none pt-4 pl-4 translate-y-1'
        />
        <button
          disabled={isLoading}
          type='submit'
          className='absolute top-[1.4rem] right-5 p-1 rounded-md text-gray-500 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent'
        >
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 20 20'
            className='h-4 w-4 rotate-90'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Form;
