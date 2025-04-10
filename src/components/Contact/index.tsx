"use client";

import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 폼 제출 로직 추가
    console.log(formData);
    alert("문의가 접수되었습니다. 감사합니다.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-7/12">
            <div
              className="mb-12 rounded-md bg-white px-8 py-11 shadow-lg dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                온라인 문의
              </h2>
              <p className="mb-12 text-base font-medium text-body-color dark:text-body-color-dark">
                유진 파워 시스템에 문의사항이 있으시면 아래 양식을 작성해 주세요.
                빠른 시일 내에 답변 드리겠습니다.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        이름
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="이름을 입력하세요"
                        required
                        className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        이메일
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="이메일을 입력하세요"
                        required
                        className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        연락처
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="연락처를 입력하세요"
                        className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        제목
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="제목을 입력하세요"
                        required
                        className="border-stroke w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        문의 내용
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="문의 내용을 입력하세요"
                        required
                        className="border-stroke w-full resize-none rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-md bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      문의하기
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-5/12">
            <div className="rounded-md bg-white p-8 shadow-lg dark:bg-gray-dark sm:p-[55px]">
              <h3 className="mb-6 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                회사 정보
              </h3>

              <div className="mb-8">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary/5 text-primary">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                      회사 주소
                    </h5>
                    <p className="text-base text-body-color dark:text-body-color-dark">
                      서울특별시 강남구 테헤란로 123 유진빌딩 8층
                    </p>
                  </div>
                </div>
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary/5 text-primary">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.3 20.1998L22.65 18.1998C21.85 17.8998 20.95 18.0998 20.35 18.6998L17.85 21.1998C14.35 19.1998 11.65 16.4998 9.64997 12.9998L12.15 10.4998C12.75 9.8998 12.95 8.9998 12.65 8.1998L10.65 2.5498C10.3 1.6498 9.45 1.0498 8.5 1.0498H4.19997C3.14997 1.0498 2.24997 1.9498 2.34997 2.9998C3.24997 14.2998 12.4 23.4498 23.7 24.3498C24.75 24.4498 25.65 23.5498 25.65 22.4998V18.1998C25.65 17.2498 25.15 16.3998 24.15 16.0498L28.3 20.1998Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                      연락처
                    </h5>
                    <p className="text-base text-body-color dark:text-body-color-dark">
                      전화: 02-123-4567
                    </p>
                    <p className="text-base text-body-color dark:text-body-color-dark">
                      팩스: 02-123-4568
                    </p>
                  </div>
                </div>
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary/5 text-primary">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28 4.7998H4C2.9 4.7998 2 5.6998 2 6.7998V23.9998C2 25.0998 2.9 25.9998 4 25.9998H28C29.1 25.9998 30 25.0998 30 23.9998V6.7998C30 5.6998 29.1 4.7998 28 4.7998ZM27.4 8.9998L16.7 16.3998C16.3 16.7998 15.7 16.7998 15.3 16.3998L4.6 8.9998C4.4 8.7998 4.3 8.4998 4.3 8.3998C4.3 7.8998 4.8 7.5998 5.2 7.8998L16 15.4998L26.8 7.8998C27.2 7.5998 27.7 7.8998 27.7 8.3998C27.7 8.5998 27.6 8.7998 27.4 8.9998Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                      이메일
                    </h5>
                    <p className="text-base text-body-color dark:text-body-color-dark">
                      info@youjin-power.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="mb-6 text-xl font-bold text-black dark:text-white">
                  오시는 길
                </h3>
                <div className="mb-4 h-[300px] overflow-hidden rounded-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.4501310466084!2d127.0323242!3d37.4996001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3fc5ba92203%3A0xf0594b659fb40be!2z7YWM7Zqp6rWQ66-464SQ7JWIIOyLoOq0keyXreuztA!5e0!3m2!1sko!2skr!4v1601234567890!5m2!1sko!2skr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
