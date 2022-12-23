import { useRef, useState } from 'react';
import axios from 'axios';

const Form = () => {
  const messageInput = useRef<HTMLTextAreaElement | null>(null);
  const [response, setResponse] = useState<String[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = messageInput.current?.value;
    if (message !== undefined) {
      const initialResponse: String[] = [...response, message];
      setResponse(initialResponse);
      setIsLoading(true);
    }

    if (!message) {
      return;
    }

    const { data } = await axios.post('/api/response', { prompt: message });
    const totalResponse: String[] = [...response, message, data.bot];
    setResponse(totalResponse);
    setIsLoading(false);
  };

  return (
    <div>
      <div className='stretch mx-2 flex flex-col gap-3 pt-6 last:mb-6 md:mx-auto md:max-w-3xl'>
        {isLoading
          ? response.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <p>{item}</p>
                </div>
              );
            })
          : response
          ? response.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <p>{item}</p>
                </div>
              );
            })
          : null}
      </div>
      <form
        onSubmit={handleSubmit}
        className='stretch mx-2 flex flex-row gap-3 pt-6 last:mb-6 md:mx-auto md:max-w-3xl'
      >
        <div className='flex flex-col w-full py-2 pl-3 flex-grow relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]'>
          <textarea
            name='Message'
            placeholder='Type your query'
            ref={messageInput}
            className=' m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0 dark:bg-transparent outline-none'
          />
          <button
            type='submit'
            className='absolute top-5 p-1 rounded-md text-gray-500 right-5 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent'
          >
            <svg
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 20 20'
              className='h-4 w-4 rotate-90'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z'></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
