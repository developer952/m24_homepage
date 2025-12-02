import type { Route } from "./+types/privacy";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "개인정보처리방침 - m24" },
    { name: "description", content: "m24 개인정보처리방침" },
  ];
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center">
              <img src="/logo.svg" alt="m24" className="h-16" />
            </a>
            <a
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              홈으로
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">개인정보 처리방침</h1>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Memento AI Inc(이하 'Memento AI' 또는 '회사')는 「개인정보 보호법」 제30조에 따라 개인정보 처리방침을 수립하여 공개합니다.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 font-semibold">
              본 개인정보 처리방침은 2025년 12월 1일부터 시행됩니다.
            </p>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. 개인정보의 처리 목적</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Memento AI는 아래의 목적을 위해 개인정보를 처리하며, 명시된 목적 외의 용도로는 사용하지 않습니다.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 dark:border-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">구분</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">개인정보 처리 목적</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">M24 회원가입</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">본인 식별 및 인증, 가입 의사 확인, 회원자격 유지 및 관리, 부정이용 방지 등</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">M24 서비스 제공</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">고객 식별 및 관리, 공지사항 전달, 요금 결제 및 정산 등</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">문의 및 민원 처리</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">고객 문의 응대, 고충처리, 분쟁 조정 등</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. 개인정보 수집 항목 및 보유기간</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 dark:border-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">구분</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">항목</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">보유기간</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">회원가입</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">성명, 이메일, 비밀번호</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">계약 종료 후 1년 또는 마지막 접속일로부터 1년</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">서비스 제공</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">캘린더 일정, 음성 전사 기록</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">서비스 종료 또는 회원 탈퇴 시</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">자동 수집 정보</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">IP, 브라우저, 접속 로그 등</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">파기 요청 시</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                음성 데이터의 경우 전사(텍스트 변환) 기록만 저장하며, 원본 녹음 파일은 저장하지 않습니다.
              </p>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. 개인정보처리 위탁 및 국외 이전</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 dark:border-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">수탁자</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">국가</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">목적</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">보유기간</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">OpenAI</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">미국</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">음성 기록 및 요약</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">탈퇴 또는 계약 종료 시까지</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Anthropic</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">미국</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">음성 기록 및 요약</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">동일</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Google</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">미국</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">음성 요약, 캘린더 연동, 데이터 분석</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">동일</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Fireworks.ai</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">미국</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">음성 기록</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">동일</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Assembly.ai</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">미국</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">음성 기록</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">동일</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Portkey.ai</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">미국</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">요약</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">동일</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-4 font-semibold">
                사용자 데이터는 AI 모델 학습에 사용되지 않습니다.
              </p>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. 정보주체의 권리와 행사 방법</h2>
              <p className="text-gray-600 dark:text-gray-300">
                개인정보의 열람, 정정, 삭제, 처리정지를 언제든 요청할 수 있으며, 서면 또는 이메일로 요청 가능합니다.
              </p>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">5. 개인정보의 파기</h2>
              <p className="text-gray-600 dark:text-gray-300">
                보유기간 경과 또는 처리 목적 달성 후 5일 이내에 파기합니다.
              </p>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">6. 개인정보 보호책임자</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 dark:border-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">이름</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700">이메일</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 dark:text-gray-300">
                    <tr>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">김지산</td>
                      <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">developer@m24ai.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">7. 안전성 확보 조치</h2>
              <p className="text-gray-600 dark:text-gray-300">
                접근 권한 관리, 데이터 암호화, 접속 기록 보관, 접근 통제 시스템 운영
              </p>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">8. 권익침해 시 구제 방법</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>개인정보침해신고센터 (privacy.kisa.or.kr, 118)</li>
                <li>개인정보분쟁조정위원회 (kopico.go.kr, 1833-6972)</li>
              </ul>
            </section>

            <hr className="border-gray-200 dark:border-gray-700 my-8" />

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">9. 처리방침 변경</h2>
              <p className="text-gray-600 dark:text-gray-300">
                변경 시 최소 7일 전에 웹사이트 또는 이메일로 공지합니다.
              </p>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}
