addSubDomain({
  description: 'DeeBee discord bot services - Invite link, email notification to devs for errors, and an upcoming website.',
  domain: '1bt.uk',
  subdomain: 'didotb',
  owner: {
    repo: 'https://github.com/didotb/DeeBee',
    email: 'didotb@gmail.com',
  },
  record: {
    A: [
      '185.199.108.153',
      '185.199.109.153',
      '185.199.110.153',
      '185.199.111.153'
    ],
    AAAA: [
      '2606:50c0:8000::153',
      '2606:50c0:8001::153',
      '2606:50c0:8002::153',
      '2606:50c0:8003::153'
    ],
  },
  proxy: false,
})
