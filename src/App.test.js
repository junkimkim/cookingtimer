import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Memory router로 라우팅을 감싸서 테스트
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

test("앱이 렌더되고 네비게이션 브랜드 CookingTimer가 보인다", () => {
  renderWithRouter(<App />);
  const brandElement = screen.getByText(/CookingTimer/i);
  expect(brandElement).toBeInTheDocument();
});

test("요리 타이머 제목 또는 메인 콘텐츠가 보인다", () => {
  renderWithRouter(<App />);
  // 한국어 기본이므로 "요리 타이머" 제목이 보인다
  const heading = screen.getByRole("heading", { level: 2 });
  expect(heading).toHaveTextContent(/요리 타이머|Cooking Timer/i);
});
