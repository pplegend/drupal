<div>
<p style="margin:0px">
<input maxlength="60" name="name" id="edit-name" size="15"  tabindex="1" class="form-text required" type="text" value="Username or email">
<input name="pass" id="edit-pass" maxlength="60" size="15" tabindex="2" class="form-text required" type="password" value="password">
<input name="op" id="edit-submit" value="<?php print $form['submit']['#value'];?>" tabindex="3" class="form-submit" type="submit">
</p>
<p style="margin:0px">
<a style="margin-right:32px" href="/user/register" title="Create a new user account.">Create new account</a>

<a href="/user/password" title="Request new password via e-mail.">Request new password</a>
</p>
  <input name="form_build_id" id="<?php print $form['form_build_id']['#id']; ?>" value="<?php print $form['form_build_id']['#value']; ?>" type="hidden">
  <input name="form_id" id="edit-user-login-block" value="user_login_block" type="hidden">
</div>
