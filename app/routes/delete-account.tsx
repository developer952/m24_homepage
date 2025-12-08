import type { Route } from "./+types/delete-account";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "계정 삭제 요청 - m24" },
    {
      name: "description",
      content: "m24 계정 및 데이터 삭제를 요청합니다.",
    },
  ];
}

// Reuse Header/Footer styles for consistency, or import if refactored.
// For now, defining simplified versions to match the look.

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/">
              <img src="/logo.svg" alt="m24" className="h-16" />
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              홈으로
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
               <a href="/">
                <img src="/logo.svg" alt="m24" className="h-20 invert" />
              </a>
            </div>
            <p className="text-gray-400 max-w-md">
              당신의 경험을 기록하고, 텍스트로 변환하고, AI와 대화하세요.
            </p>
          </div>
          
           <div>
            <h4 className="font-semibold text-white mb-4">회사</h4>
            <ul className="space-y-2">
              <li><a href="/terms" className="hover:text-white transition-colors">이용약관</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              <li><a href="/delete-account" className="hover:text-white transition-colors">계정 삭제</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">&copy; 2024 m24. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            계정 및 데이터 삭제 요청
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            계정 삭제를 원하시면 아래 버튼을 클릭하여 양식을 작성해 주세요.<br/>
            요청하신 내용은 확인 후 처리되며, 모든 데이터는 영구적으로 삭제됩니다.
          </p>
          
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc-jGoMelGi--xw-LdzrvswGQ96jJfeZoM2AmoOzU0aBZBmxA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-colors bg-red-600 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            계정 삭제 요청하기
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
