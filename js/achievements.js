// ── 업적 카테고리 ────────────────────────────────────────────────────
export const ACHIEVEMENT_CATEGORIES = [
  { id: 'record',  label: '기록', icon: '📝' },
  { id: 'loss',    label: '감량', icon: '📉' },
  { id: 'goal',    label: '목표', icon: '🎯' },
  { id: 'renewal', label: '갱신', icon: '🔄' },
  { id: 'monthly', label: '월간', icon: '📅' },
  { id: 'weekly',  label: '주간', icon: '📆' },
];

// ── 업적 목록 ────────────────────────────────────────────────────────
export const ACHIEVEMENTS = [
  // 📝 기록
  { id:'record_1',   cat:'record',  name:'첫 발걸음',       desc:'체중 기록을 시작했어요',           score:10,  icon:'👣' },
  { id:'record_10',  cat:'record',  name:'꾸준함의 시작',   desc:'10번의 기록이 쌓였어요',           score:10,  icon:'📝' },
  { id:'record_50',  cat:'record',  name:'성실한 기록자',   desc:'50번의 기록이 쌓였어요',           score:20,  icon:'📋' },
  { id:'record_100', cat:'record',  name:'백 번의 의지',    desc:'100번의 기록이 쌓였어요',          score:30,  icon:'💯' },
  { id:'record_200', cat:'record',  name:'기록의 달인',     desc:'200번의 기록이 쌓였어요',          score:30,  icon:'🏅' },
  { id:'record_365', cat:'record',  name:'365의 기적',      desc:'365번의 기록이 쌓였어요',          score:50,  icon:'🌟', legendary:true },

  // 📉 감량
  { id:'loss_1pct',  cat:'loss',    name:'첫 감량',         desc:'최고 체중 대비 1% 감량',           score:10,  icon:'📉' },
  { id:'loss_2pct',  cat:'loss',    name:'조금씩 더',       desc:'최고 체중 대비 2% 감량',           score:10,  icon:'📉' },
  { id:'loss_3pct',  cat:'loss',    name:'3% 돌파',         desc:'최고 체중 대비 3% 감량',           score:10,  icon:'📉' },
  { id:'loss_5pct',  cat:'loss',    name:'5% 클럽',         desc:'최고 체중 대비 5% 감량',           score:15,  icon:'🔥' },
  { id:'loss_7pct',  cat:'loss',    name:'7% 달성',         desc:'최고 체중 대비 7% 감량',           score:15,  icon:'🔥' },
  { id:'loss_10pct', cat:'loss',    name:'10% 돌파',        desc:'최고 체중 대비 10% 감량',          score:20,  icon:'💪' },
  { id:'loss_15pct', cat:'loss',    name:'15% 달성',        desc:'15% 감량 또는 BMI 23.5 이하',      score:25,  icon:'💪', bmiThreshold:23.5 },
  { id:'loss_20pct', cat:'loss',    name:'20% 달성',        desc:'20% 감량 또는 BMI 23 이하',        score:30,  icon:'⚡', bmiThreshold:23   },
  { id:'loss_25pct', cat:'loss',    name:'25% 달성',        desc:'25% 감량 또는 BMI 22.5 이하',      score:40,  icon:'⚡', bmiThreshold:22.5 },
  { id:'loss_30pct', cat:'loss',    name:'30% 위업',        desc:'30% 감량 또는 BMI 22 이하',        score:50,  icon:'👑', legendary:true, bmiThreshold:22 },

  // 🎯 목표
  { id:'goal_set',      cat:'goal', name:'목표 설정',       desc:'목표 체중을 처음으로 설정했어요',   score:10,  icon:'🎯' },
  { id:'goal_achieved', cat:'goal', name:'목표 달성!',      desc:'설정한 목표 체중에 도달했어요',     score:50,  icon:'🏆', legendary:true },

  // 🔄 갱신
  { id:'renewal_1',   cat:'renewal', name:'첫 최저 갱신',  desc:'처음으로 최저 체중을 갱신했어요',   score:10,  icon:'🔄' },
  { id:'renewal_5',   cat:'renewal', name:'5회 갱신',      desc:'최저 체중을 5번 경신했어요',         score:10,  icon:'🔄' },
  { id:'renewal_10',  cat:'renewal', name:'10회 갱신',     desc:'최저 체중을 10번 경신했어요',        score:20,  icon:'🔄' },
  { id:'renewal_20',  cat:'renewal', name:'20회 갱신',     desc:'최저 체중을 20번 경신했어요',        score:20,  icon:'🔄' },
  { id:'renewal_30',  cat:'renewal', name:'30회 갱신',     desc:'최저 체중을 30번 경신했어요',        score:20,  icon:'⭐' },
  { id:'renewal_50',  cat:'renewal', name:'50회 갱신',     desc:'최저 체중을 50번 경신했어요',        score:30,  icon:'⭐' },
  { id:'renewal_100', cat:'renewal', name:'100회 갱신 위업',desc:'최저 체중을 100번 경신했어요',     score:50,  icon:'💎', legendary:true },

  // 📅 월간
  { id:'monthly_10',   cat:'monthly', name:'월간 10회',    desc:'한 달에 10회 이상 기록한 달 달성',  score:10,  icon:'📅' },
  { id:'monthly_20',   cat:'monthly', name:'월간 20회',    desc:'한 달에 20회 이상 기록한 달 달성',  score:10,  icon:'📅' },
  { id:'monthly_20x2', cat:'monthly', name:'2개월 달성',   desc:'월 20회+ 기록 2개월 누적',          score:10,  icon:'📅' },
  { id:'monthly_20x3', cat:'monthly', name:'3개월 달성',   desc:'월 20회+ 기록 3개월 누적',          score:20,  icon:'📅' },
  { id:'monthly_20x4', cat:'monthly', name:'4개월 달성',   desc:'월 20회+ 기록 4개월 누적',          score:20,  icon:'📅' },
  { id:'monthly_20x5', cat:'monthly', name:'5개월 달성',   desc:'월 20회+ 기록 5개월 누적',          score:30,  icon:'📅' },
  { id:'monthly_20x6', cat:'monthly', name:'6개월 달성',   desc:'월 20회+ 기록 6개월 누적',          score:30,  icon:'📅' },
  { id:'monthly_20x12',cat:'monthly', name:'1년 달성 위업',desc:'월 20회+ 기록 12개월 누적',         score:50,  icon:'🌟', legendary:true },

  // 📆 주간
  { id:'weekly_1',  cat:'weekly', name:'첫 주간 감량',    desc:'전주 평균보다 낮아진 주 1회',        score:10,  icon:'📆' },
  { id:'weekly_3',  cat:'weekly', name:'3주 감량',        desc:'전주 평균보다 낮아진 주 3회 누적',   score:10,  icon:'📆' },
  { id:'weekly_5',  cat:'weekly', name:'5주 감량',        desc:'전주 평균보다 낮아진 주 5회 누적',   score:10,  icon:'📆' },
  { id:'weekly_10', cat:'weekly', name:'10주 감량',       desc:'전주 평균보다 낮아진 주 10회 누적',  score:20,  icon:'📆' },
  { id:'weekly_15', cat:'weekly', name:'15주 감량',       desc:'전주 평균보다 낮아진 주 15회 누적',  score:20,  icon:'📆' },
  { id:'weekly_20', cat:'weekly', name:'20주 감량',       desc:'전주 평균보다 낮아진 주 20회 누적',  score:30,  icon:'📆' },
  { id:'weekly_30', cat:'weekly', name:'30주 감량 위업',  desc:'전주 평균보다 낮아진 주 30회 누적',  score:50,  icon:'👑', legendary:true },
];

// ── 업적 계산 ────────────────────────────────────────────────────────
export function calculateEarnedIds(records, user) {
  const earned = new Set();
  const valid  = records.filter(r => r.weight != null).sort((a,b) => a.date.localeCompare(b.date));
  if (!valid.length) return earned;

  const total      = valid.length;
  const maxWeight  = Math.max(...valid.map(r => r.weight));
  const minWeight  = Math.min(...valid.map(r => r.weight));
  const height     = user?.height;

  // 기록
  if (total >= 1)   earned.add('record_1');
  if (total >= 10)  earned.add('record_10');
  if (total >= 50)  earned.add('record_50');
  if (total >= 100) earned.add('record_100');
  if (total >= 200) earned.add('record_200');
  if (total >= 365) earned.add('record_365');

  // 감량 (최고 체중 기준 %)
  const lossPct = maxWeight > 0 ? (maxWeight - minWeight) / maxWeight * 100 : 0;
  const bestBmi = height ? minWeight / ((height / 100) ** 2) : null;

  if (lossPct >= 1)  earned.add('loss_1pct');
  if (lossPct >= 2)  earned.add('loss_2pct');
  if (lossPct >= 3)  earned.add('loss_3pct');
  if (lossPct >= 5)  earned.add('loss_5pct');
  if (lossPct >= 7)  earned.add('loss_7pct');
  if (lossPct >= 10) earned.add('loss_10pct');
  if (lossPct >= 15 || (bestBmi !== null && bestBmi <= 23.5)) earned.add('loss_15pct');
  if (lossPct >= 20 || (bestBmi !== null && bestBmi <= 23))   earned.add('loss_20pct');
  if (lossPct >= 25 || (bestBmi !== null && bestBmi <= 22.5)) earned.add('loss_25pct');
  if (lossPct >= 30 || (bestBmi !== null && bestBmi <= 22))   earned.add('loss_30pct');

  // 목표
  const goal = user?.goal;
  if (goal)                earned.add('goal_set');
  if (goal && minWeight <= goal) earned.add('goal_achieved');

  // 갱신 (최저 체중 갱신 횟수)
  let renewals = 0, runMin = valid[0].weight;
  for (let i = 1; i < valid.length; i++) {
    if (valid[i].weight < runMin) { runMin = valid[i].weight; renewals++; }
  }
  if (renewals >= 1)   earned.add('renewal_1');
  if (renewals >= 5)   earned.add('renewal_5');
  if (renewals >= 10)  earned.add('renewal_10');
  if (renewals >= 20)  earned.add('renewal_20');
  if (renewals >= 30)  earned.add('renewal_30');
  if (renewals >= 50)  earned.add('renewal_50');
  if (renewals >= 100) earned.add('renewal_100');

  // 월간
  const monthMap = {};
  valid.forEach(r => { const ym = r.date.slice(0,7); monthMap[ym] = (monthMap[ym]||0)+1; });
  const m10  = Object.values(monthMap).filter(c => c >= 10).length;
  const m20  = Object.values(monthMap).filter(c => c >= 20).length;
  if (m10  >= 1)  earned.add('monthly_10');
  if (m20  >= 1)  earned.add('monthly_20');
  if (m20  >= 2)  earned.add('monthly_20x2');
  if (m20  >= 3)  earned.add('monthly_20x3');
  if (m20  >= 4)  earned.add('monthly_20x4');
  if (m20  >= 5)  earned.add('monthly_20x5');
  if (m20  >= 6)  earned.add('monthly_20x6');
  if (m20  >= 12) earned.add('monthly_20x12');

  // 주간 (일요일 기준, 전주 평균보다 낮아진 주 횟수)
  const weekMap = {};
  valid.forEach(r => {
    const d   = new Date(r.date + 'T00:00:00');
    const sun = new Date(d); sun.setDate(d.getDate() - d.getDay());
    const wk  = sun.toISOString().slice(0,10);
    if (!weekMap[wk]) weekMap[wk] = [];
    weekMap[wk].push(r.weight);
  });
  const weeks = Object.entries(weekMap)
    .sort((a,b) => a[0].localeCompare(b[0]))
    .map(([,ws]) => ws.reduce((s,w)=>s+w,0)/ws.length);
  let weekDec = 0;
  for (let i = 1; i < weeks.length; i++) if (weeks[i] < weeks[i-1]) weekDec++;

  if (weekDec >= 1)  earned.add('weekly_1');
  if (weekDec >= 3)  earned.add('weekly_3');
  if (weekDec >= 5)  earned.add('weekly_5');
  if (weekDec >= 10) earned.add('weekly_10');
  if (weekDec >= 15) earned.add('weekly_15');
  if (weekDec >= 20) earned.add('weekly_20');
  if (weekDec >= 30) earned.add('weekly_30');

  return earned;
}

// ── 점수 계산 ────────────────────────────────────────────────────────
export function calcTotalScore(earnedIds) {
  return [...earnedIds].reduce((sum, id) => {
    const a = ACHIEVEMENTS.find(x => x.id === id);
    return sum + (a ? a.score : 0);
  }, 0);
}

// ── 티어 계산 ────────────────────────────────────────────────────────
export const DEFAULT_TIERS = [
  { id:'iron',          name:'아이언',       minScore:0,    color:'#8B8B8B' },
  { id:'bronze',        name:'브론즈',       minScore:50,   color:'#CD7F32' },
  { id:'silver',        name:'실버',         minScore:120,  color:'#A8A8A8' },
  { id:'gold',          name:'골드',         minScore:220,  color:'#FFD700' },
  { id:'platinum',      name:'플래티넘',     minScore:350,  color:'#E5E4E2' },
  { id:'diamond',       name:'다이아몬드',   minScore:500,  color:'#89CFF0' },
  { id:'master',        name:'마스터',       minScore:650,  color:'#9B59B6' },
  { id:'grandmaster',   name:'그랜드마스터', minScore:780,  color:'#E74C3C' },
  { id:'challenger',    name:'챌린저',       minScore:900,  color:'#F39C12' },
];

export function getTierForScore(score, tiers = DEFAULT_TIERS) {
  const sorted = [...tiers].sort((a,b) => b.minScore - a.minScore);
  return sorted.find(t => score >= t.minScore) || sorted[sorted.length - 1];
}
