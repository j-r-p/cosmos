package org.cs.strm.user.repos;

import java.util.List;

import org.cs.strm.user.bean.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends CrudRepository<User, Long> {
	List<User> findByNameIgnoreCase(String name);
}
